export function greet(name = 'world') {
  return `Hello, ${name}!`
}

export function farewell(name = 'world') {
  return `Goodbye, ${String(name).trim()}!`
}
