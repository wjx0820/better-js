document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`
// naming
// Consistancy Is King
// Clear, searchable & obvious

const BASE_SALARY = 16000
const SALARY_MULTIPLIER = 4

const makePerson = ({ firstName, age, job, lastName }) => {
  return {
    name: firstName + " " + lastName,
    age,
    job,
    salary: BASE_SALARY * SALARY_MULTIPLIER
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

// NOT GOOD
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   }
//   return hiredDevInfo
// }

const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  }
  return hiredDev
}

console.log(hireDev({ dev }))
