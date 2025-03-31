const createCounter = () => {
       let count = 0
       return ()=> count++
}

const counter = createCounter()
console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter()) // 2