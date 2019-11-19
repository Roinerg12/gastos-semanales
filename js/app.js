//variable
const userBudget = prompt('¿Cual es tu presupuesto?');
let budgetAmount;

// Clases
class Budget{
  constructor(budget){
    this.budget = Number(budget);
    this.remaining = Number(budget);
  }
  remainingBudget(amount = 0){
    return this.remaining -=Number(amount)
  }
}
//listener
document.addEventListener('DOMContentLoaded', () =>{
  if(userBudget === null || userBudget === ''){
    window.location.reload();
  }else{
    budgetAmount = new Budget(userBudget);
  }
})
