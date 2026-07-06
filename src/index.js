export function greet(name) {
  if (!name) {
    throw new Error('Name is required')
  }

  return `Hello, ${name}!`
}

export function farewell(name) {
  if (!name) {
    throw new Error('Name is required')
  }

  return `Goodbye, ${name}!`
}
