function reduce<T>(
  array: T[],
  callback: (accumulator: T, currentValue: T) => T,
  initialValue: T
): T {
  let finalValue = initialValue
  for (let i = 0; i < array.length; i++) {
    finalValue = callback(finalValue, array[i])
  }
  return finalValue
}

const cities = [
  {
    city: 'Chongqing',
    population: 30165500,
  },
  {
    city: 'Shanghai',
    population: 24183300,
  },
  {
    city: 'Beijing',
    population: 21707000,
  },
  {
    city: 'Lagos',
    population: 16060303,
  },
]

const totalPopulation = cities.reduce((sum, city) => sum + city.population, 0)

console.log(totalPopulation)

const fields = [
  {
    type: 'text',
    title: 'Title',
    name: 'title',
    constraints: {
      required: {
        message: '^Title is required',
        allowEmpty: false,
      },
    },
  },
  {
    type: 'text',
    title: 'Slug',
    name: 'slug',
    constraints: {
      required: {
        message: '^Slug is required',
        allowEmpty: false,
      },
      format: {
        pattern: '[a-z0-9_-]+',
        flags: 'i',
        message: '^Can only be a valid slug',
      },
    },
  },
]

const validationRules = fields.reduce(
  (rules, field) => Object.assign(rules, { [field.name]: field.constraints }),
  {}
)

console.log(validationRules)

console.log(
  reduce(
    [1, 2, 3, 4, 5],
    (total, number) => {
      return total + number
    },
    0
  )
)
