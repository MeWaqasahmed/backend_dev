function BankaAccount(customerName, customerStatus, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.customerStatus = customerStatus;

   this.deposit = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  }
}
const waqas = new BankaAccount("waqas" , "blocked")
const Qazi = new BankaAccount("waqas" , "blocked" ,8000)
// console.log(waqas.balance);
// waqas.deposit(5000);
// console.log(waqas.balance)
Qazi.withdraw(3000);
console.log(Qazi.balance);
