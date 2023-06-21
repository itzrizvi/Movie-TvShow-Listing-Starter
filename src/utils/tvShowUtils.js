    // Helper function to merge existing and new episodes while avoiding duplicates
    const mergeEpisodes = (existingEpisodes, newEpisodes) => {
        const mergedEpisodes = [...existingEpisodes];
            for (const newEpisode of newEpisodes) {
                const existingEpisodeIndex = mergedEpisodes.findIndex(
                (episode) => episode.episode === newEpisode.episode
            );

            if (existingEpisodeIndex > -1) {
                // If the episode already exists, update its properties
                mergedEpisodes[existingEpisodeIndex] = {
                    ...mergedEpisodes[existingEpisodeIndex],
                    ...newEpisode,
                };
            } else {
                // If the episode doesn't exist, add it to the merged episodes array
                mergedEpisodes.push(newEpisode);
            }
        }
        return mergedEpisodes;
    };

module.exports = {
    mergeEpisodes
}