// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
// and returns the maximum number of cakes Pete can bake(integer).For simplicity there are no units
// for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.

interface Recipe {
  [key: string]: number
}

const cakes = (recipe: Recipe, available: Recipe) => {
  const recipeArray = Object.keys(recipe)
  const availableArray = Object.keys(available)
  const ingredients = availableArray.filter((item) =>
    recipeArray.includes(item)
  )
  let result: number[] = []
  if (recipeArray.length > availableArray.length) return 0
  for (let key of ingredients) {
    result.push(available[key] / recipe[key])
  }

  return parseInt(Math.min(...result).toString())
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
) // returns 2

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
)
