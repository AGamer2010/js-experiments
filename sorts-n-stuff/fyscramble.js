array1 = []

scrambledArr = []

elements = 20

for(i = 0; i < elements; i++){
    array1.push(i+1)
}
console.log(array1)

for(i = elements; i > 0 ; i--){
    temp = Math.floor(Math.random()*i)
    tbrem = array1[temp]
    scrambledArr.push(tbrem)
    array1.splice(temp, 1)
}

console.log(array1)

console.log(scrambledArr)