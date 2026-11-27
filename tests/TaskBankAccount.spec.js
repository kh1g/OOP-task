const { test, expect } = require("@playwright/test");
const BankAccount = require("../TaskBankAccount");

test.describe("BankAccount withdrawals", () => {
    test("withdraws a standard amount from the balance", () => {
        const account = new BankAccount("Alice", 100);

        account.withdraw(40);

        expect(account.getBalance()).toBe(60);
    });

    test("rejects a withdrawal that exceeds the balance without changing it", () => {
        const account = new BankAccount("Alice", 100);

        expect(() => account.withdraw(101)).toThrow("Insufficient funds!");
        expect(account.getBalance()).toBe(100);
    });

    test("rejects a negative withdrawal amount without changing the balance", () => {
        const account = new BankAccount("Alice", 100);

        expect(() => account.withdraw(-50)).toThrow(
            "Withdrawal amount must be greater than 0"
        );
        expect(account.getBalance()).toBe(100);
    });
});
