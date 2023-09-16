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

function findCountryAndMobileNum(numb, country) {
  if (country === "GE") {
    return "+995" + numb + ", GE";
  } else if (country === "US") {
    return "+1(" + numb + "), US";
  } else if (country === "RU") {
    return "+7" + numb + ", RU";
  } else {
    return "არ ვიცით რა ქვეყანაა ეს!";
  }
}

console.log(findCountryAndMobileNum("+15577774745", "US"));


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
