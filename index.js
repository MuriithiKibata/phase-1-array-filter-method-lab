// Code your solution here
function findMatching (drivers, attribute) {
 let filtered = drivers.filter((item)=> item.toLowerCase() === attribute.toLowerCase())
 return filtered
}

console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', 'bobby'], "Bobby"))

function fuzzyMatch (drivers, attribute) {
let filtered = drivers.filter((item)=> item.startsWith(attribute))
return filtered
}

function matchName (drivers, attribute) {
  let filtered =  drivers.filter((item) => item.name === attribute)
  return filtered
}