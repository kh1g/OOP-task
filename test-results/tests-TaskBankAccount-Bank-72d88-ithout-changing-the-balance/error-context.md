# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\TaskBankAccount.spec.js >> BankAccount withdrawals >> rejects a negative withdrawal amount without changing the balance
- Location: tests\TaskBankAccount.spec.js:20:5

# Error details

```
Error: expect(received).toThrow(expected)

Expected substring: "Withdrawal amount must be greater than 0"

Received function did not throw
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const BankAccount = require("../TaskBankAccount");
  3  | 
  4  | test.describe("BankAccount withdrawals", () => {
  5  |     test("withdraws a standard amount from the balance", () => {
  6  |         const account = new BankAccount("Alice", 100);
  7  | 
  8  |         account.withdraw(40);
  9  | 
  10 |         expect(account.getBalance()).toBe(60);
  11 |     });
  12 | 
  13 |     test("rejects a withdrawal that exceeds the balance without changing it", () => {
  14 |         const account = new BankAccount("Alice", 100);
  15 | 
  16 |         expect(() => account.withdraw(101)).toThrow("Insufficient funds!");
  17 |         expect(account.getBalance()).toBe(100);
  18 |     });
  19 | 
  20 |     test("rejects a negative withdrawal amount without changing the balance", () => {
  21 |         const account = new BankAccount("Alice", 100);
  22 | 
> 23 |         expect(() => account.withdraw(-50)).toThrow(
     |                                             ^ Error: expect(received).toThrow(expected)
  24 |             "Withdrawal amount must be greater than 0"
  25 |         );
  26 |         expect(account.getBalance()).toBe(100);
  27 |     });
  28 | });
  29 | 
```