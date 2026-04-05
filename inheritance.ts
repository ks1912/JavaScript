class BankAccounts {
  protected owner: string;
  protected balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccounts {
  private interestRate: number;

  constructor(owner: string, balance: number, interestRate: number) {
    super(owner, balance); // call parent constructor
    this.interestRate = interestRate;
  }

  addInterest(): void {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
  }
}

class CurrentAccount extends BankAccounts {
  private overdraftLimit: number;

  constructor(owner: string, balance: number, overdraftLimit: number) {
    super(owner, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
    } else {
      console.log("Overdraft limit exceeded");
    }
  }
}

const savings = new SavingsAccount("Kunal", 1000, 0.05);
savings.deposit(500);
savings.addInterest();
console.log(savings.getBalance());

const current = new CurrentAccount("Kunal", 1000, 500);
current.withdraw(1300);
console.log(current.getBalance());
