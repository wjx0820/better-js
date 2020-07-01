document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`
const newArray = ["hi", "scott", "1", "2"]
const [a, b, ...c] = newArray
console.log(c)

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  }
}

const dev = makePerson("scott", 32, "web dev")

const { name, ...rest } = dev

// React
// this.props.names
// const { names } = this.props
// ...this.props

console.log(name, rest)
