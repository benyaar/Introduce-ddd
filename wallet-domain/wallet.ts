import {User} from "./user";

export class Wallet {
  public owner: User
  public balance: number
    constructor(owner: User) {
      this.owner = owner
      this.balance = 0
    }

  addMoneyToBalance(moneyAmount: number) {
    if(moneyAmount < 0 ) throw new Error ('Bad money amount')
      this.balance += moneyAmount
  }
}
