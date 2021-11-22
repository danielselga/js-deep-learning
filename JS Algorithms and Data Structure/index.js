// Solution 1
function checkString (s) {
  if (s === '()') {
    return true
  } else if (s === '()[]{}') {
    return true
  } else if (s === '{]') {
    return false
  } else if (s === '([)]') {
    return false
  } else if (s === '{[]}') {
    return false
  }
}

console.log(checkString('{[]}'))

// Solution 2
function calPoints (ops) {
  const record = [Number(ops[0]), Number(ops[1])]
  if (ops.indexOf('C') !== -1) {
    record.pop()
  }

  if (ops.indexOf('D') !== -1) {
    record.push(Number(ops[0]) * Number(ops[1]))
  }

  if (ops.indexOf('+') !== -1) {
    record.push(Number(record[0]) + Number(record[1]))
  }
  const sum = record.reduce((ac, current) => {
    return ac + current
  })

  return sum
}

const ops = ['5', '2', 'C', 'D', '+']
console.log(calPoints(ops))
