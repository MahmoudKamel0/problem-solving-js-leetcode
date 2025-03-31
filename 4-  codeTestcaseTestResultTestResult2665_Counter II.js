/**
       * @param {integer} init
       * @return { increment: Function, decrement: Function, reset: Function }
*/
const createCounter = init => {
       let count = init;
       return {
              increment: () => ++count,
              decrement: () => --count,
              reset: () => count = init
       }
}

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());    // 5
console.log(counter.decrement()); // 4

