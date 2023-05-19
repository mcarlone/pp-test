export const savedSearches = (): string[] => {
    const searchesStore = localStorage.getItem("savedSearches");
    const savedSearches = searchesStore ? JSON.parse(searchesStore) : [];
    return savedSearches;
}
export const saveSearch = (searchTerm:string): void => {
    const HISTORY_RECORD_LIMIT = 50;
    let cleanedSearches = savedSearches().filter((term:string) => term !== searchTerm);
    cleanedSearches.unshift(searchTerm);
    localStorage.setItem("savedSearches", JSON.stringify(cleanedSearches.slice(0,HISTORY_RECORD_LIMIT)));
}