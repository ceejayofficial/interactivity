const cardNum = document.getElementById("cardNum");
const names = document.getElementById("name");
const cvc = document.getElementById("cvc");
const month = document.getElementById("month");
const year = document.getElementById("year");
const slash = document.getElementById("slash");

const InptcardNum = document.getElementById("InptcardNum");
const InptName = document.getElementById("InptName");
const exp1 = document.getElementById("exp1");
const exp2 = document.getElementById("exp2");
const exp3 = document.getElementById("exp3");

function setCardNumber(e) {
    cardNum.innerText = format(e.target.value);
    
}
function setCardName(e) {
    names.innerText = format(e.target.value);
}
function setCardMonth(e) {
    month.innerText = format(e.target.value);
}
function setCardYear(e) {
    year.innerText = format(e.target.value);
}
function setCardCvc(e) {
    cvc.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
  }
  
InptcardNum.addEventListener("keyup", setCardNumber);
InptName.addEventListener("keyup", setCardName);
exp1.addEventListener("keyup", setCardMonth);
exp2.addEventListener("keyup", setCardYear);
exp3.addEventListener("keyup", setCardCvc);




function Thanks(){
    const targetElement = document.querySelector('.user-input'); 
    const targetElement1 = document.querySelector('.thank'); 
    const error = document.getElementById('error'); 

   

    if (targetElement) {
        // Add the "added-class" to the target element
        targetElement.classList.add('hidden');
        targetElement1.classList.remove('hidden');
        cardNum.innerText ="";
        names.innerText="";
        cvc.innerText="";
        month.innerText="";
        year.innerText="";
        slash.innerText="";
    
      } else{
          targetElement.classList.add('user-input');
          targetElement1.classList.remove('thank'); 
      }
    
}
