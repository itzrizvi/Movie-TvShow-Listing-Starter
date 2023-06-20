// All Requires
const { default: slugify } = require("slugify");


module.exports = {
    // CREATE MOVIE HELPER
    createMovie: async (req, db, user) => {
        try {
            if(!user) return { message:"Not Authorized", status:false }
            const { title } = req;
            // Slug
            const slug = slugify(title, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true,
                strict: true,
                trim: true
            });
            // Check If This Movie Already Exists
            const checkExisitng = await db.Movie.countDocuments({ slug: slug }).exec();
            if(checkExisitng > 0) return {message:"This Movie Already Exists!!!", status:false}
            // Data To Insert
            const newMoviePayload = {
                ...req,
                slug
            }

            // Create New Movie
            const createNewMovie = await db.Movie.create(newMoviePayload);
            if(createNewMovie) return { message:"New Movie Created Successfully!!!", status:true }

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // UPDATE MOVIE HELPER
    updateMovie: async (req, db, user) => {
        try {

            if(!user) return { message:"Not Authorized", status:false };

            let slug;
            if(req.title){
                // Slug
                slug = slugify(req.title, {
                    replacement: '-',
                    remove: /[*+~.()'"!:@]/g,
                    lower: true,
                    strict: true,
                    trim: true
                });
            }
            
            // Check If This Movie Already Exists
            const checkExisitng = await db.Movie.countDocuments({ _id:{ $ne: req.id }, slug: slug }).exec();
            if(checkExisitng > 0) return {message:"This Movie Already Exists!!!", status:false}

            // Data To Insert
            const updatedMoviePayload = {
                ...req,
                slug
            }

            // Update Movie
            const options = { new: true, upsert: true, runValidators: true };
            const query = { _id : req.id };
            const updatedMovie = await db.Movie.findOneAndUpdate(query, updatedMoviePayload, options);
            if(updatedMovie) return { message:"Movie Updated Successfully!!!", status:true }
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // DELETE MOVIE HELPER
    deleteMovie: async (req, db, user) => {
        try {

            if (!user) return { message:"Not Authorized", status:false };

            const { id } = req;
            
            // Check If This Movie Exists
            const checkExisitng = await db.Movie.countDocuments({ _id: id }).exec();
            if(checkExisitng <= 0) return { message:"Non Existing Request!!!", status:false };

            // Find and delete the movie
            const deletedMovie = await db.Movie.findOneAndDelete({ _id: id });
            if(deletedMovie) return { message:"Movie Deleted Successfully!!!", status:true }
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET MOVIE LIST HELPER
    getMovieList: async (query, db) => {
        try {
        
            const pageNumber = parseInt(query.page) || 1;
            const limit = query.limit || 20;

            // Calculate skip value based on page number and limit
            const skip = (pageNumber - 1) * limit;

            // Query movies with pagination
            const [movies, totalCount] = await Promise.all([
                db.Movie.find({})
                .skip(skip)
                .limit(limit),
                db.Movie.countDocuments({}),
            ]);

            if (movies.length === 0) return { message: "No movies found", status: false };
            const totalShowingCount = movies.length;
            const totalPages = Math.ceil(totalCount / limit);

            return {
                message: "Movies retrieved successfully!!!",
                status: true,
                showing: totalShowingCount,
                currentPage: pageNumber,
                totalMovies: totalCount,
                totalPages,
                data:movies
            };
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE MOVIE HELPER
    getSingleMovie: async (query, db) => {
        try {
            const { id } = query;
            // Find the movie by its ID
            const movie = await db.Movie.findById(id);
            if (!movie) return { message: "Movie not found", status: false };

            return {
                message: "Movie retrieved successfully",
                status: true,
                data: movie,
            };

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
}