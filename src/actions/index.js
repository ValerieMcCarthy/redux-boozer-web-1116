const defaultCocktails = [{id: 1, name: 'Gin and Tonic', description: "2 shots of gin, half a glass of water, 3 ice cubes"}, {id: 2, name: 'Old Fashioned'}, {id: 3, name: 'Negroni'}, {id: 4, name: 'Roy Rogers'}];

export function fetchCocktails() {
  return {type: "FETCH_COCKTAILS", payload: defaultCocktails}
}

export function selectCocktail(key) {
  return {type: "SELECT_COCKTAIL", payload: key}
}
