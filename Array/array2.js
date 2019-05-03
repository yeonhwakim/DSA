function lastBlankIndex(s){
  for(let i = s.length-2; i >= 0; i--){
    if(s[i]===' '){
      return i;
    }
  }
  return 0;
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
  const s = " "+input+" ";
  const index = lastBlankIndex(s);
  const word = getword(s, index+1);
  return word + ' a am I';
}

test('simple', ()=>{
  expect(reverseString('I am a boy.')).toBe('boy. a am I');
})

test('getWord', ()=>{
  expect(getWord('abc ', 0)).toBe('abc');
  expect(getWord('abc d', 0)).toBe('abc');
  expect(getWord('a bc d', 2)).toBe('bc');
})

test('lastBlankIndex', ()=>{
  expect(lastBlankIndex(' a ')).toBe(0);
  expect(lastBlankIndex(' a b ')).toBe(2);
})