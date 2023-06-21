// All Requires
const { default: slugify } = require("slugify");
const { slugifyRecursive } = require("../utils/slugifyRecursive");
const { mergeEpisodes } = require("../utils/tvShowUtils");


module.exports = {
    // CREATE TV SHOW HELPER
    createTVShow: async (req, db, user) => {
        try {
            if(!user) return { message:"Not Authorized", status:false }

            const { title, seasons } = req;
            // Slug
            const slug = slugify(title, {
                replacement: '-',
                remove: /[*+~.()'"!:@]/g,
                lower: true,
                strict: true,
                trim: true
            });
            // Slugify Each Seasons Episod Titles in a Recursive way
            slugifyRecursive(seasons);

            // Check If This TV Show Already Exists
            const checkExisitng = await db.TVShow.countDocuments({ slug: slug }).exec();
            if(checkExisitng > 0) return { message:"This TV Show Already Exists!!!", status:false };

            // Data To Insert
            const newTvShowPayload = {
                ...req,
                slug
            }
            // Create New TV SHOW
            const createNewTvShow = await db.TVShow.create(newTvShowPayload);
            if(createNewTvShow) return { message:"New TV Show Created Successfully!!!", status:true }

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // UPDATE TV Show HELPER
    updateTVShow: async (req, db, user) => {
        try {

            if(!user) return { message:"Not Authorized", status:false };
            const { id, title, seasons } = req;
            let slug;
            if(title){
                // Slug
                slug = slugify(title, {
                    replacement: '-',
                    remove: /[*+~.()'"!:@]/g,
                    lower: true,
                    strict: true,
                    trim: true
                });

                // Check If The Updated TV Show Already Exists
                const checkExisitng = await db.TVShow.countDocuments({ _id:{ $ne: id }, slug: slug }).exec();
                if(checkExisitng > 0) return {message:"This TV Show Already Exists!!!", status:false}
            }
            const existingTvShow = await db.TVShow.findById(id).select("seasons");
            let updatedSeasons = existingTvShow.seasons;
            if (seasons) {
                // Slugify Each Seasons Episod Titles in a Recursive way
                slugifyRecursive(seasons);
                 // Iterate over the new seasons
                for (const newSeason of seasons) {
                    const { season: newSeasonNumber, episodes: newEpisodes } = newSeason;

                    // Find the matching existing season
                    const existingSeasonIndex = updatedSeasons.findIndex(
                    (season) => season.season === newSeasonNumber
                    );

                    if (existingSeasonIndex > -1) {
                    // Merge the episodes of the existing season with the new episodes
                    updatedSeasons[existingSeasonIndex].episodes = mergeEpisodes(
                        updatedSeasons[existingSeasonIndex].episodes,
                        newEpisodes
                    );
                    } else {
                    // If the season doesn't exist, add it to the updated seasons array
                    updatedSeasons.push(newSeason);
                    }
                }
            }

              // Create the updated TV show payload
            const updatedTvShowPayload = {
                ...req,
                slug,
                seasons: updatedSeasons,
            };

            // Update the TV show
            const options = { new: true, upsert: true, runValidators: true };
            const updatedTvShow = await db.TVShow.findOneAndUpdate(
                { _id: id },
                updatedTvShowPayload,
                options
            );
            if (updatedTvShow) {
                return { message: "TV show updated successfully", status: true };
            }

            return { message: "TV show update failed", status: false };
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // DELETE TV SHOW HELPER
    deleteTVShow: async (req, db, user) => {
        try {

            if (!user) return { message:"Not Authorized", status:false };

            const { id } = req;
            
            // Check If This TV SHOW Exists
            const checkExisitng = await db.TVShow.countDocuments({ _id: id }).exec();
            if(checkExisitng <= 0) return { message:"Non Existing Request!!!", status:false };

            // Find and delete the TV SHOW
            const deletedTvShow = await db.TVShow.findOneAndDelete({ _id: id });
            if(deletedTvShow) return { message:"Tv Show Deleted Successfully!!!", status:true }
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET TV SHOW LIST HELPER
    getTvShowList: async (query, db) => {
        try {
        
            const pageNumber = parseInt(query.page) || 1;
            const limit = query.limit || 20;

            // Calculate skip value based on page number and limit
            const skip = (pageNumber - 1) * limit;

            // Query Tv Show with pagination
            const [tvShows, totalCount] = await Promise.all([
                db.TVShow.find({})
                .skip(skip)
                .limit(limit),
                db.TVShow.countDocuments({}),
            ]);

            if (tvShows.length === 0) return { message: "No TV Show found", status: false };
            const totalShowingCount = tvShows.length;
            const totalPages = Math.ceil(totalCount / limit);

            return {
                message: "TV Shows retrieved successfully!!!",
                status: true,
                showing: totalShowingCount,
                currentPage: pageNumber,
                totalTvShows: totalCount,
                totalPages,
                data: tvShows
            };
            

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE TV SHOW HELPER
    getSingleTvShow: async (query, db) => {
        try {
            const { id } = query;
            // Find the tv show by its ID
            const tvShow = await db.TVShow.findById(id);
            if (!tvShow) return { message: "TV Show not found", status: false };

            return {
                message: "Tv Show retrieved successfully",
                status: true,
                data: tvShow,
            };

        } catch (error) {
            if (error) return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    }
}