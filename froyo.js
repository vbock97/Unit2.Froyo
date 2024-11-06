let userFlavors = prompt("Enter Your Order")

let userInput = userFlavors.split(",")

console.log(userInput)


const userOrder = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
}

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] == "vanilla")
        userOrder.vanilla++
    if (userInput[i] == "strawberry")
        userOrder.strawberry++
    if (userInput[i] == "coffee")
        userOrder.coffee++
}
console.table(userOrder)