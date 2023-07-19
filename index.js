// let count =  0

//console.log(count)

//let myAge = 27
//console.log(myAge)

//let count = 5 + 7
//console.log(count)

//let count1 = 10 - 3
//console.log(count1)
//let count2 = 2 * 8
//console.log(count2)

//let firstBatch = 5
//let count = firstBatch
//console.log(count)

//let firstBatch = 5
//let secondBatch = 7
//let count = firstBatch + secondBatch
//console.log(count)

//let myAge = 27
//let humanDogRatio = 7
//let myDogAge = myAge * humanDogRatio
//console.log(myDogAge)

//let count11 = 134
//let count5 = 5 + count11
//console.log(count5)

//let bonusPoints = 50
//bonusPoints = bonusPoints + 50
//bonusPoints = bonusPoints - 75
//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)

//document.getElementById("idname").innerText = 5

//let username = "noori"
//let message = "You have three notifications"
//console.log(username + "," + message + "!!")
//let messagetouser = username + "," + message + "!"
//console.log(messagetouser)

//let name = "noori"
//let greeting = "Hi, my name is"
//myGreeting = greeting + " " + name
//console.log(myGreeting)

//let age = 27
//let greet = "I am"
//mygreet = greet + " " + age
//console.log(mygreet)

//let welcomeEl = document.getElementById("welcome-el")
//let name1 = "noori"
//let msg = "Welcome back,"
//let mesg = msg + " " + name1
//welcomeEl.innerText = mesg
//welcomeEl.innerText =  msg + " " + name1
//welcomeEl.innerText = welcome.innerText + "👋"
//let firstname = "Noorinisha"
//let lastname = "Begam"
//let fullname = firstname + " " + lastname
//console.log(fullname)
let name = "linda"
let greeting = "Hi there"

function greetlinda() {
  console.log(greeting + "," + name)
}

greetlinda()

let mypoints = 3

function add3points() {
  mypoints = mypoints + 3
}

function remove1point() {
  mypoints = mypoints - 1
}

add3points()
add3points()
add3points()
remove1point()
remove1point()

console.log(mypoints)


console.log("2" + 2)
console.log(11 + 7)
console.log(6 + "5")
console.log("My points:" + 5 + 9)
console.log(2 + 2)
console.log("11" + "14")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
  count = count + 1
  countEl.textContent = count
}

function save() {
  let countstr = count + "-"
  saveEl.textContent = saveEl.textContent + countstr
  //  saveEl.textContent += countstr
  countEl.textContent = 0
  count = 0
}
