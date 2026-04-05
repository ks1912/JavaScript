// Encapsulation

// Wrapping data and methods/functions together and restricting direct access to data to ensure data integrity.

class BankAccount {
    private _owner: string;
    private _balance: number;

    constructor(owner: string, initialBalance: number) {
        this._owner = owner;
        this._balance = initialBalance;
    }

    private deposit(amount: number) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    private withdraw(amount: number) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        }
    }

    public getBalance(): number {
        return this._balance;
    }

    public depositMoney(amount: number): void {
        this.deposit(amount);
    }

    public withdrawMoney(amount: number): void {
        this.withdraw(amount);
    }
}

const myAccount = new BankAccount("Alice", 1000);
myAccount.depositMoney(500);
myAccount.withdrawMoney(200);
console.log(myAccount.getBalance());

// In this example, the BankAccount class encapsulates the balance and provides methods to interact with it, ensuring that the balance cannot be directly modified from outside the class.