
'use strict';

module.exports = {
BankAccount: function(accountName, type)
{
	var accTypeVar = new AccountTypeVariats();
	this.name = accountName;
	this.type = type;
	this.balance = accTypeVar.initBalance(this.type);
	this.interestRate = accTypeVar.interestRate(this.type);
	this.withdraw = withdraw;
	this.deposit = deposit;
	this.addInterest = addInterest;
},
CurrentAccount: function()
{
	this.haveCheckbook = true;
	this.canIssueCheck = canIssueCheck;
	this.__proto__  = exports.BankAccount;
},
SavingsAccount: function()
{
	this.getBonus = true;
	this.canGetBonus = canGetBonus;
	this.__proto__ = exports.BankAccount;
}
};
var withdraw = function(amount)
{
	if (amount <= this.balance)
	{
		this.balance -= amount;
	}
};
var deposit = function(amount)
{
	this.balance += amount;
};
var addInterest = function()
{
	this.balance += (this.interestRate * this.balance);
};

var AccountTypeVariats = function(){};
AccountTypeVariats.prototype.initBalance = function(type)
{
	if (type === "Current Account")
	{
		return 1000;
	}
	else
	{
		return 0;
	}
};
AccountTypeVariats.prototype.interestRate = function(type)
{
	if (type === "Current Account")
	{
		return 0.05;
	}
	else
	{
		return 0.01;
	}
};


var canIssueCheck = function()
{
	return this.haveCheckbook;
};


var canGetBonus = function()
{
	return this.getBonus;
};



