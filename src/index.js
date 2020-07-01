document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`
// Immutable vs Mutable

// let name = "Scott"
// name = name + " Tolinski"
// console.log(name)

// const name = "Scott"
// const fullName = name + " Tolinski"
// console.log(fullName)

// Pure Functions
// Always return the same thing with the same input
const addTwo = x => x + 2

console.log(addTwo(2))
console.log(addTwo(2))
console.log(addTwo(2))

// NOT PURE
let multi = 3 // External State
const addThree = x => x + multi
console.log(addThree(2))
multi = 4
console.log(addThree(2))
multi = 6
console.log(addThree(2))

// funtion mutate outside thing
let mult = 2
const addFour = x => {
  mult += 2
  return x + mult
}
console.log(addFour(2))
console.log(addFour(2))
console.log(addFour(2))
