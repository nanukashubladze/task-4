1.

function sliceSentence(sentence, num) {
  if (sentence.length > num) {
    return sentence.slice(0, num) + "...";
  } else {
    return "ვეღარაფერს ჩამოჭრი ;) ";
  }
}

console.log(sliceSentence("მშვენიერია, შემძლებია!!! ^", 30));

2. 

// error .....

3.

function findCountryAndMobileNum(number, country) {
  if (number === "995577774745" && country === "GE") return "+995577774745, GE";
  if (number === "199577774745" && country === "US") return "+1(995)77774745, US";
  if (number === "795577774745" && country === "RU") return "+795577774745, RU";
  else return "არ ვიცით რა ქვეყანაა ეს!";
}

console.log(findCountryAndMobileNum("995577774745", "GE"));


4.

function uniqueNum(arr) {
  
  let uniqueNumber = [];
  for( let i = 0; i <= arr.length; i++){
  if (!uniqueNumber.includes(arr[i])) {
    uniqueNumber.push(arr[i]);
    }
  }
return uniqueNumber;
}

const arr = [1, 2, 3, 3, 5, 2, 7, 8, 7, 10];
const uniqueNumber = uniqueNum(arr);

console.log(uniqueNumber); 

5. 

// error.... 
