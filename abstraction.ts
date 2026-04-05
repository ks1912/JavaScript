// When we dont want to create direct object but want to create a blueprint for the object we can use abstract class.
// Abstract class is a class that cannot be instantiated and is meant to be subclassed. It can contain abstract methods, which are methods that are declared but not implemented in the abstract class. Subclasses of the abstract class must implement the abstract methods.

interface Transaction {
  deposit(amount: number): void;
  withdraw(amount: number): void;
}
abstract class BankAccount implements Transaction {
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

class SavingsAccount extends BankAccount {
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }
}

class CurrentAccount extends BankAccount {
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

const savings = new SavingsAccount("Alice", 1000);
savings.deposit(500);
console.log(savings.getBalance()); // 1500
savings.withdraw(200);
console.log(savings.getBalance()); // 1300

const current = new CurrentAccount("Bob", 500, 200);
current.withdraw(600); // Overdraft limit exceeded
current.withdraw(700); // Overdraft limit exceeded
current.withdraw(400); // Withdraw successful
console.log(current.getBalance()); // -100 

// Note: We cannot create an instance of the abstract class BankAccount directly, as it is meant to be subclassed. We can only create instances of the subclasses SavingsAccount and CurrentAccount.