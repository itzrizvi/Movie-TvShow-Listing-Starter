const { default: slugify } = require("slugify");



module.exports = {
    // CREATE MOVIE HELPER
    createMovie: async (req, db, user) => {
        try {
            
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
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // DELETE MOVIE HELPER
    deleteMovie: async (req, db, user) => {
        try {
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
}