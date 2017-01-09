(function(){
  'use strict';
  var chai = require("jasmine");
  
  var myApp = require("../bankaccount/bankaccount.js");
  describe("CurrentAccount Class: Create a CurrentAccount, give it minimum balance, can deposit, wilhdraw and gain interest", function() {

    it("The account should be a type of `object`, and an instance of the `BankAccount` class", function() {
      var account = new myApp.CurrentAccount('Adeyemi', 'Current Account');
      expect(typeof account).toEqual(typeof {});
      expect(account instanceof myApp.BankAccount).toBeTruthy();
    });

    it("The current account should have a minimum balance of 1000 and have a checkbook", function() {
      var curAcc = new myApp.CurrentAccount('Adeyemi', 'Current Account');
      expect(curAcc.balance).toEqual(1000);
      expect(curAcc.haveCheckbook).toBe(true);
    });

    it("The current account should have a property account name and type", function() {
      var mCur  = new myApp.CurrentAccount('Adeyemi', 'Current Account');
      expect(mCur.name).toBe('Adeyemi');
      expect(mCur.type).toBe('Current Account');
    });

    it("The current account can withdraw but not below minimum balance", function() {
      var mCur = new myApp.CurrentAccount('Adeyemi', 'Current Account');
      expect(mCur.withdraw(500)).toBe('cannot with below minimum balance');
      mCur.deposit(1000);
      expect(mCur.balance).toBe(2000);
       mCur.withdraw(1000);
      expect(mCur.balance).toBe(1500);
    });

    it("The current account should have an interest rate of 5% when due", function() {
      var zCur = new myApp.CurrentAccount('Adeyemi', 'Current Account');;
      zCur.addInterest();
      expect(zCur.balance).toBe(1050);
    });

  });


describe("SavingsAccount Class: Create a SavingsAccount, give it minimum balance, can deposit, wilhdraw and gain interest", function() {

    it("The account should be a type of `object`, and an instance of the `BankAccount` class", function() {
      var acc = new myApp.SavingsAccount('Adeyemi', 'Savings Account');
      expect(typeof acc).toEqual(typeof {});
      expect(acc instanceof myApp.BankAccount).toBeTruthy();
    });

    it("The Savings Account should have a minimum balance of 0 and cannot have a checkbook", function() {
      var savAcc = new myApp.SavingsAccount('Adeyemi', 'Savings Account');
      expect(savAcc.balance).toEqual(0);
      expect(savAcc.haveCheckbook).toBe(undefined);
    });

    it("The Savings Account should have a property account name and type", function() {
      var mSav  = new myApp.SavingsAccount('Adeyemi', 'Savings Account');
      expect(mSav.name).toBe('Adeyemi');
      expect(mSav.type).toBe('Savings Account');
    });

    it("The Savings Account can withdraw but not below minimum balance", function() {
      var mSav = new myApp.SavingsAccount('Adeyemi', 'Savings Account');
      expect(mSav.withdraw(500)).toBe('cannot with below minimum balance');
      mSav.deposit(1000);
      expect(mSav.balance).toBe(1000);
      mSav.withdraw(500);
      expect(mSav.balance).toBe(500);
    });

    it("The Savings Account should have an interest rate of 1% when due", function() {
      var zSav = new myApp.SavingsAccount('Adeyemi', 'Savings Account');;
      zSav.addInterest();
      expect(zSav.balance).toBe(0);
      mSav.deposit(1000);
      expect(mSav.balance).toBe(1010);
    });

  });
})();