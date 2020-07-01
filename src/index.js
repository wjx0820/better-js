document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`
// parameters
// order does not matter now
const makePerson = ({ firstName, age, job, lastName }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job
  }
}

// const tempName = {
//   name: "Scott",
//   lastName: "Tolinski",
//   age: 32,
//   job: "web dev"
// }

// arguments are things pass in to functions
// more explicit and easy to read
const dev = makePerson({
  firstName: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "web dev"
})

console.log(dev)
