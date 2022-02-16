let balance = 0;


function inputFun(id) {
  let input = document.getElementById(id);
  let inputValue = input.value;
  let inputNumber = parseFloat(inputValue)
  return inputNumber;
}

document.getElementById("calculate-btn").addEventListener("click", () => {
  let income = inputFun("inputIncome");
  let foodCost = inputFun("foodInput");
  let rentCost = inputFun("rentCost");
  let clothCost = inputFun("clothCost");


    if(isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)){
        console.log('wrong number');
    }else if(income<=0 || foodCost<0 || rentCost<0 || clothCost<0){
        console.log('must be gether than 0')
    }  
    else{
        let totalExpenses = foodCost + rentCost + clothCost;
        balance = income - totalExpenses;
        if(totalExpenses > income){
            console.log('total cost can not be bigger')
        }else{
            document.getElementById("totalExpenses").innerText = totalExpenses;
            document.getElementById("balance").innerText = balance;
        }  
    }
 
});

document.getElementById('saveBtn').addEventListener('click',()=>{
    let income = inputFun("inputIncome");
    let saveInput = inputFun('save');
    let savingAmount = (income*saveInput)/ 100;

    if(balance > savingAmount){
        let remainingBalance =  balance - savingAmount;
        document.getElementById('savingAmount').innerText = savingAmount;
        document.getElementById('remainingBalance').innerText = remainingBalance;
    }else{
        console.log('dhurrrrr')
    }  
})
