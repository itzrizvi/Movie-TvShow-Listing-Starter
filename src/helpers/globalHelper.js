// All Requires


module.exports = {
    // GET LIST HELPER
    getItemList: async (query, db) => {
        try {
            const page = query?.page ? parseInt(query.page) : 1;
            const perPage = query?.perPage ? parseInt(query.perPage) : 2;

            // Calculate skip value based on page and perPage
            const skip = (page - 1) * perPage;

            // Retrieve paginated data from both Movie and TVShow models
            const movies = await db.Movie.find({}).skip(skip).limit(perPage);
            const tvShows = await db.TVShow.find({}).skip(skip).limit(perPage);

            // Get the total count of items in both models
            const movieCount = await db.Movie.countDocuments({});
            const tvShowCount = await db.TVShow.countDocuments({});

            // Return the paginated list of movies and TV shows with merged pagination metadata
            return {
                message: "Item list retrieved successfully",
                status: true,
                movies,
                tvShows,
                pagination: {
                page,
                perPage,
                totalItems: movies.length + tvShows.length,
                totalPages: Math.ceil((movieCount + tvShowCount) / perPage),
                },
            };
        } catch (error) {
            return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
    // GET SINGLE HELPER
    getSingleItem: async (query, db) => {
        try {
            const { id } = query;

            // Search for the item with the given ID in both Movie and TVShow models
            const movie = await db.Movie.findById(id);
            const tvShow = await db.TVShow.findById(id);

            if (movie) {
                // If the item is found in the Movie model, return it
                return {
                    message: "Movie found",
                    status: true,
                    movie,
                };
            } else if (tvShow) {
                // If the item is found in the TVShow model, return it
                return {
                    message: "TV show found",
                    status: true,
                    tvShow,
                };
            } else {
                // If the item is not found in either model, return an error message
                return {
                    message: "Item not found",
                    status: false,
                };
            }
        } catch (error) {
            return { message: `Something Went Wrong!!! Error: ${error}`, status: false };
        }
    },
}