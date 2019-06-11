function countPermutation(value) {
  let data = {}

  Array.from(value).map((p) => {
    !data[p] ? data[p] = 1 : data[p] += 1
  })

  return data
}

function countResult(value) {
  const circulation = countPermutation(value)
  let even = 0
  let odd = 0

  for (var i in circulation) {
    circulation[i] % 2 === 0 ? even++ : odd++
  }

  return [even, odd]
}

function permutate(permutation) {

  const expectedPair = parseInt(permutation.length / 2)
  const expectedSolo = parseInt(permutation.length % 2)

  const result = countResult(permutation)
  const resultPair = result[0]
  const resultSolo = result[1]
  
   if (expectedPair === resultPair && expectedSolo === resultSolo) {
    return true
  }

  return false
}

test('countPermutation', () => {
  expect(countPermutation('A')).toEqual({"A":1})
  expect(countPermutation('AB')).toEqual({"A":1,"B":1})
})

test('countResult', () => {
  expect(countResult('A')).toEqual([0,1])
  expect(countResult('AABB')).toEqual([2,0])
  expect(countResult('AABBC')).toEqual([2,1])
})

test('permutate', () => {
  expect(permutate('AABBCC')).toBeTruthy()
  expect(permutate('AABBCCd')).toBeTruthy()
  expect(permutate('AABBCCgy')).toBeFalsy()
})


//주어진 string length 나누기 2
// 짝수면 몫 division과 나머지 0 remain
// 홀수면 몫 division과 나머지 1 remain
// 주어진 string 돌면서 object 저정 count++
// 다시 object 돌면서 짝이 있는 거랑 짝이 없는거 count++
// 비교
