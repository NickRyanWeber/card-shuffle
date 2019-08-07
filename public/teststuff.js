//Test Stuff
const testArray = [1, 4, 9, 2, 5, 4]
let offset1 = testArray.length / 2 - 1
let offset2 = offset1 + 1
let offset

const testFunction = () => {
  let q
  console.log(
    '#1 Offset = ' + testArray[offset1],
    '#2 Offset = ' + testArray[offset2]
  )
  console.log(testArray)
  if (testArray[offset1] > testArray[offset2]) {
    console.log('#1 Offset = ' + testArray[offset1])
    offset = offset2 - offset1 + 1
    q = testArray.splice(offset1, offset)
    console.log(q)
    q.forEach(element => {
      testArray.unshift(element)
    })
    offset1++
    offset2++
  } else {
    console.log('#2 Offset = ' + testArray[offset2])
    offset = offset2 - offset1 + 1
    q = testArray.splice(offset1, offset)
    console.log(q)
    q.reverse()
    console.log(q)
    q.forEach(element => {
      testArray.push(element)
    })
    offset1--
    offset2--
  }
  console.log(testArray)
}

document.querySelector('button').addEventListener('click', testFunction)
