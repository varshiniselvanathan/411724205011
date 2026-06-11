console.log("Hi")
const a= 10;
console.log(a)

const b = "String";
console.log(b)

const arr = [1, 2.1, "huhh", false]
console.log(arr)

arr[1] = 6.7
console.log(arr[1])

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr)

function example(){
    console.log("OhhhOOO")
}

const first = document.getElementById("ptag")
first.innerHTML = "Paragraph"

const input = document.getElementById("input")
const output = document.getElementById("inputField")

input.addEventListener("input", ()=>{
    output.textContent = input.value

})

const ptag = DocumentFragment.createElement("h1")
ptag.textContent = "Some text"
Document.body.appendChild(ptag)



