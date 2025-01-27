export const getSpeciesList = async (apiUrl) => {
    const response = await fetch(`${apiUrl}/taxa`);
    if (response.status === 200) {
        const speciesList = await response.json();
        return {
            species: speciesList.sort((a, b) => a.name.localeCompare(b.name)),
            error: null,
        };
    }
    return {
        species: [],
        error: `Failed to load species list: ${response.statusText}`,
    };
};
//# sourceMappingURL=getSpeciesList.js.map