function lastBlankIndex(inputString){
  for(let i = inputString.length-2; i >= 0; i--){
    if(inputString[i]===' '){
      return i;
    }
  }
}

function getWord(s,index){
  let result = '';
  let i = index;
  while (s[i] !== ' '){
    result += s[i];
    i++;
  }
  return result;
}

function reverseString(input){
  const index = lastBlankIndex(input);
  const word = getWord(input, index+1);
  return [word, index];
}

function assemble(inputString){
  let input = " "+inputString+" "
  let result = ''
  while(input.length>2){
    const word = reverseString(input)[0]
    const index = reverseString(input)[1]
    result += index ? word+' ' : word
    input = input.substring(0,index+1)
  }
  return result
}

// test('simple', ()=>{
//   expect(reverseString('I am a boy.')).toBe('a');
// })

test('getWord', ()=>{
  expect(getWord('abc ', 0)).toBe('abc');
  expect(getWord('abc d', 0)).toBe('abc');
  expect(getWord('a bc d', 2)).toBe('bc');
})

test('lastBlankIndex', ()=>{
  expect(lastBlankIndex(' a ')).toBe(0);
  expect(lastBlankIndex(' a b ')).toBe(2);
})

test('assemble', ()=>{
  expect(assemble('I am a boy.')).toBe('boy. a am I');

})