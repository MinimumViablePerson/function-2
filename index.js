console.log('Users:', users)
console.log('todos:', todos)

// - Prompt the user for a letter ✅
// - Find all the users whose name contains the letter ✅
// - Say hi to those users in the console - but only 1 greeting every 2 seconds. ✅
// - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them. ✅

const letter = String(prompt('Enter a letter:'))

// let usersWithLetter = []

// for (let user of users) {
//   if (user.name.includes(letter)) {
//     usersWithLetter.push(user)
//   }
// }

// let usersWithLetter = users.filter(function (user) {
//   return user.name.includes(letter)
// })

// To make the search case insensitive, we can use the toLowerCase() method on both strings.
let usersWithLetter = users.filter(user =>
  user.name.toLowerCase().includes(letter.toLowerCase())
)

// Like a loop but over time
let i = 0

let intervalId = setInterval(() => {
  let user = usersWithLetter[i]
  if (user) {
    console.log(`Hi ${user.name}!`)
    i++
  } else {
    clearInterval(intervalId)
  }
}, 2000)

// // Like a loop but over time
// let i = 0

// let intervalId = setInterval(() => {
//   let user = usersWithLetter[i]
//   console.log(`Hi ${user.name}!`)
//   i++
// }, 2000)

// setTimeout(() => {
//   clearInterval(intervalId)
// }, usersWithLetter.length * 2000)

let userId = Number(prompt('Enter a user ID:'))
// - Prompt the user for a user ID. ✅
// - Find all the todos for this user ✅
// - Find only the ones that are incomplete ✅
// - console log them ✅

// let userTodos = todos.filter(todo => todo.userId === userId)
// let incompleteTodos = userTodos.filter(todo => todo.completed === false)

let incompleteUserTodos = todos
  .filter(todo => todo.userId === userId && todo.completed === false)
  .map(todo => todo.title)

// .filter: get fewer items from a list based on a condition
// .map: new list with transformed items

console.log(incompleteUserTodos)
// let userTodos = todos.filter(function (todo) {
//   return todo.userId === userId
// })

// let userTodos = []

// for (let todo of todos) {
//   if (todo.userId === userId) {
//     userTodos.push(todo)
//   }
// }
