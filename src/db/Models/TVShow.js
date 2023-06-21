const mongoose = require("mongoose");

const tvShowSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        slug: { 
            type: String, 
            required: true,
            unique: true
        },
        seasons: [
            {
                season: {
                    type: String,
                    required: true
                },
                releaseDate: {
                    type: Date,
                    required: true
                },
                totalRuntime: {
                    type: String,
                    required: true
                },
                episodes: [
                    {
                        episode: {
                            type: String,
                            required: true
                        },
                        title: {
                            type: String,
                            required: true
                        },
                        slug: { 
                            type: String, 
                            required: true,
                            unique: true
                        },
                        runtime: {
                            type: String,
                            required: true
                        }
                    }
                ]
            }
        ],
        actors: [
            {
                type: String,
                required: true
            }
        ],
        actresses: [
            {
                type: String,
                required: true
            }
        ],
        producers: [
            {
                type: String,
                required: true
            }
        ],
        genres: [
            {
                type: String,
                required: true
            }
        ],
        directors: [
            {
                type: String,
                required: true
            }
        ],
        productionTeam: [
            {
                type: String,
                required: true
            }
        ],
        cameraAndItTeam: [
            {
                type: String,
                required: true
            }
        ],
        visualEffectsTeam: [
            {
                type: String
            }
        ],
        artTeam: [
            {
                type: String
            }
        ],
        sponsors: [
            {
                type: String
            }
        ],
        writers: [
            {
                type: String,
                required: true
            }
        ],
        musicTeam: [
            {
                type: String,
                required: true
            }
        ],
        costumeDepartment: [
            {
                type: String,
                required: true
            }
        ],
        imdbRating: {
            type: String,
            required: true
        },
        origin: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const TVShow = mongoose.model("TVShow", tvShowSchema);

module.exports = TVShow;
