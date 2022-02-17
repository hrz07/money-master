// initially set balance to 0

let balance = 0;

// a function for take input

function inputFun(id) {
  let input = document.getElementById(id);
  let inputValue = input.value;
  let inputNumber = parseFloat(inputValue)
  return inputNumber;
}

// Event-Listener for calculate button

document.getElementById("calculate-btn").addEventListener("click", () => {
  let income = inputFun("inputIncome");
  let foodCost = inputFun("foodInput");
  let rentCost = inputFun("rentCost");
  let clothCost = inputFun("clothCost");

    if(isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)){

        document.getElementById('numberVarify').style.display = 'block';

    }else if(income<=0 || foodCost<0 || rentCost<0 || clothCost<0){

        document.getElementById('positiveVarify').style.display = 'block';
    }  
    else{
        let totalExpenses = foodCost + rentCost + clothCost;
        balance = income - totalExpenses;
        if(totalExpenses > income){
            document.getElementById('incomeVarify').style.display = 'block';
        }else{
            document.getElementById("totalExpenses").innerText = totalExpenses;
            document.getElementById("balance").innerText = balance;

            document.getElementById('numberVarify').style.display = 'none';
            document.getElementById('positiveVarify').style.display = 'none';
            document.getElementById('incomeVarify').style.display = 'none';
        }  
    }
});

// Event-Listener for save button

document.getElementById('saveBtn').addEventListener('click',()=>{
    let income = inputFun("inputIncome");
    let saveInput = inputFun('save');
    let savingAmount = (income*saveInput)/ 100;

    if(balance > savingAmount){
        let remainingBalance =  balance - savingAmount;
        document.getElementById('savingAmount').innerText = savingAmount;
        document.getElementById('remainingBalance').innerText = remainingBalance;
    }else{
        document.getElementById('saveVarify').style.display = 'block';
    }  
})
