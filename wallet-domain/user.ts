import {Wallet} from "./wallet";

export class User {
    public wallets: Wallet[] = []
    constructor() {}

    createWallet(){
      const newWallet = new Wallet(this)
      this.wallets.push(newWallet)
      return newWallet
    }

    addMoneyToBalance(amount: number, wallet: Wallet){
      if(wallet.owner !== this) throw new Error('Forbidden')
      wallet.addMoneyToBalance(amount)
    }

    getTotalBalance(){
      return this.wallets.reduce((acc, w) => {
        acc += w.balance
        return acc
      }, 0)
    }
}
