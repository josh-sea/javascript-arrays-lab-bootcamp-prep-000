// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}
function appendKitten(name) {
  var newArray = [...kittens,name];
  return newArray
}
function prependKitten(name) {
  var newNewArray = [name,...kittens];
  return newNewArray
}
function removeLastKitten() {
  var newArray= kittens.splice(kittens.length)
}