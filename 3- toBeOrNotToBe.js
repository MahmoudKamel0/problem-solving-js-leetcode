const toBeOrNotToBe = (val) => {
       return {
              toBe: (expected) => {
                     if (val === expected) return true
                     throw new Error(`Expected ${val} not to be ${expected}`)
              },
              notToBe: (expected) => {
                     if (val !== expected) return true
                     throw new Error(`Expected ${val} to be ${expected}`)
              }
       }
}

// Example usage:
const result = toBeOrNotToBe(5).toBe(5) // true
console.log(result) // true;
