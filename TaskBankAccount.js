class BankAccount {
    #balance
    #owner

    constructor(owner, balance = 0){
        this.#owner = owner
        this.#balance = balance
    }

    deposit(amount){
        if(amount <= 0){
            throw new Error("Deposit amount must be greater than 0")
        }
        this.#balance += amount
    }


    withdraw(amount) {
        // BUG: Does not check for negative amounts!
        if (amount > this.#balance) {
            throw new Error("Insufficient funds!");
        }
        this.#balance -= amount;
    }

    getBalance(){
        return this.#balance
    }
}

module.exports = BankAccount;