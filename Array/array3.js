function lastBlankIndex(s){
  for(let i = s.length-2; i >= 0; i--){
    if(s[i] === ' '){
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
  const s = " "+input+" ";
  const index = lastBlankIndex(s);
  const word = getWord(s, index+1);
  return word;
}

// function cutString(getting,resultWord){
//   const inputString = input;
//   let resultWord = reverseString(inputString.trim());
//   if(inputString.indexOf(resultWord) > 0){
//     resultString += resultWord;
//     inputString.replace(resultWord,'');
//     reverseString(inputString.trim());
    
//   }else{
//     return resultString
//   }
  
// }

// function result(){
//   const resultWord = reverseString(input)
//   const cut = cutString(getting,resultWord)
//   return cut
// }

//
console.log(result('I am a boy.'))