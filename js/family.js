 function inputExpences(inputId){
  const inputValueText = document.getElementById(inputId).value;
   const inputValue = parseFloat(inputValueText);
   if(inputValue>=0){
    return inputValue;
   }
   else{
     alert('your input value is negative or letter');
   }
    
 }

document.getElementById('calculate').addEventListener('click',function(){
    
    // take input from user
      const foodValue =inputExpences('food');
      const rentValue =inputExpences('rent');
      const clothesValue =inputExpences('clothes');
      const totalIncomeValue =inputExpences('total-income');
     
      // total of expencess
    const  totalExpencesValue = rentValue+clothesValue+foodValue;

    if(totalIncomeValue>totalExpencesValue){
      // show expencess balance
      const totalExpencesText = document.getElementById('total-expences');
      totalExpencesText.innerText = totalExpencesValue;

      // show balance amount
        const blanceText = document.getElementById('blance');
          const blanceTextValue = totalIncomeValue-totalExpencesValue;
          blanceText.innerText=blanceTextValue;
    }
    else(
      alert('your Expensive is greater than net income')
    )
          
});

document.getElementById('save-btn').addEventListener('click',function(){
  // /take percentage value from user
   const saveInputValue = inputExpences('save-input');

  const blanceText = document.getElementById('blance').innerText;
  const balanceTextValue = parseFloat(blanceText);
  const saveAmount = balanceTextValue*(saveInputValue/100);

  const saveAmountText=document.getElementById('save-amount');
   saveAmountText.innerText =saveAmount;

   const remainBalance = document.getElementById('remaing-balance');
    remainBalance.innerText= balanceTextValue-saveAmount;
      
})