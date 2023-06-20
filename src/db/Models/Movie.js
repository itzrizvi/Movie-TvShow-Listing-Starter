const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
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
        releaseDate: { 
            type: Date, 
            required: true
        },
        runtime: { 
            type: String,
            required: true
        },
        actors: [{ 
            type: String,
            required: true
        }],
        actresses: [{ 
            type: String,
            required: true
        }],
        producers: [{ 
            type: String,
            required: true
        }],
        genres: [{ 
            type: String,
            required: true
        }],
        directors: [{ 
            type: String,
            required: true
        }],
        productionTeam: [{ 
            type: String,
            required: true
        }],
        cameraAndItTeam: [{ 
            type: String,
            required: true
        }],
        visualEffectsTeam: [{ 
            type: String,
            required: true
        }],
        artTeam: [{ 
            type: String,
            required: true
        }],
        sponsors: [{ 
            type: String,
            required: true
        }],
        writers: [{ 
            type: String,
            required: true
        }],
        musicTeam: [{ 
            type: String,
            required: true 
        }],
        locationDepartment: [{ 
            type: String,
            required: true
        }],
        costumeDepartment: [{ 
            type: String,
            required: true 
        }],
        imdbRating: { 
            type: String,
            required: true
        },
        origin: { 
            type: String
        }
    },
    {
        timestamps: true,
    }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
