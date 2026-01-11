// button functionality 

document.getElementById('ButtonId').addEventListener('click',function(e){
    e.preventDefault();
   const MobileNumber=12345678910;
   const PinNumber=1234;
   const MobileNumberValue=document.getElementById('mobileNumberId').value;
   const mobileNumbervalueConvertor=parseInt(MobileNumberValue);

//    take input value from value input field not interhtml because of its not like element of p and h .that why we use  value ok 

const PinNumberValue=document.getElementById('PinNumberId').value;
const PinNumberValueConvertor=parseInt(PinNumberValue);


// console log 
console.log(PinNumberValueConvertor,mobileNumbervalueConvertor);
  

if(MobileNumber === mobileNumbervalueConvertor &&  PinNumber === PinNumberValueConvertor){
    window.location.href="./home.html";

}
else{
    alert("Invalid credentials");
    
}
   
})