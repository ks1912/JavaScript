// Polymorphism in TypeScript
// Polymorphism allows us to treat objects of different classes through a common interface. In this example, we have an abstract class `BankAccounts` that defines the structure for different types of bank accounts. Both `SavingsAccount` and `CurrentAccount` classes implement the `withdraw` method differently, demonstrating polymorphism.
// The `Transaction` interface defines the methods that any bank account should implement, and the `BankAccounts` abstract class provides a common structure for all types of bank accounts. The `SavingsAccount` and `CurrentAccount` classes extend the `BankAccounts` class and provide their own implementation of the `withdraw` method. Finally, we create an array of `BankAccounts` objects and call the `withdraw` method on each account, demonstrating polymorphism in action.

interface Transaction {
  deposit(amount: number): void;
  withdraw(amount: number): void;
}
abstract class BankAccounts implements Transaction {
  protected owner: string;
  protected balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  abstract withdraw(amount: number): void; // must be implemented

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccounts extends BankAccounts {
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
}

class CurrentAccounts extends BankAccounts {
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

const accounts: BankAccounts[] = [
  new SavingsAccounts("Alice", 1000),
  new CurrentAccounts("Bob", 500, 200)
];

accounts.forEach(account => {
  account.withdraw(600); // Polymorphic call
}); 

