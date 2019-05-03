function int2str(n) {
  const numbers = extractNum(n, []);

  return numbersToString(numbers);
}

function extractNum(input, array) {
  const division = parseInt(input / 10);
  const remain = input % 10;

  array.push(remain);

  if (division === 0) {
    return array;
  }``

  return extractNum(division, array);
}

function numbersToString(numbers) {
  var result = '';

  if (numbers[0] < 0){
    result += '-';
  }

  for (var i = numbers.length - 1; i >= 0; i--) {
    result += Math.abs(numbers[i])
  }

  return result;
}

console.assert('0' === int2str(0));
console.assert('1' === int2str(1));
console.assert('123' === int2str(123));
console.assert('123' === int2str(+123));
console.assert('-1' === int2str(-1));
console.assert('-37' === int2str(-37));
console.assert('12345' === numbersToString([5,4,3,2,1]));
console.assert('-37' === numbersToString([-7, -3]));

