/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div


let billinput = document.getElementById('billTotalInput');
let tipinput = document.getElementById('tipInput');
let numberofpeople = document.getElementById('numberOfPeople');
let perpersontotal = document.getElementById('perPersonTotal');



// Get number of people from number of people div
let totalpeople = Number(numberofpeople.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  let inp = Number(billinput.value);
  // console.log(inp)

  // get the tip from user & convert it into a percentage (divide by 100)
  let tip = Number(tipinput.value)/100;

  // get the total tip amount
  let totaltip = tip*inp;

  // calculate the total (tip amount + bill)
  let total = inp+totaltip;

  // calculate the per person total (total divided by number of people)
  let perpersonsum = (total/totalpeople).toFixed(2);

  // update the perPersonTotal on DOM & show it to user
  perpersontotal.innerText = `$${perpersonsum.toLocaleString('en-US')}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  totalpeople++;

  // update the DOM with the new number of people
  numberofpeople.innerText = totalpeople;
  

  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  
  
  // decrement the amount of people
  if (totalpeople>1){
     totalpeople--; 
  }


  // update the DOM with the new number of people
  numberofpeople.innerText = totalpeople;


  // calculate the bill based on the new number of people
  calculateBill();
  
}