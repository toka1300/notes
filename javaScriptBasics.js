// ----------for..of loops----------
const animals = ['dog', 'cat', 'bear']
for (let animal of animals) {            //Do not have to define i, animal is local variable (element of array)
  console.log(animal)                    //Can use on all iterables, not just arrays, but don't have index
}
