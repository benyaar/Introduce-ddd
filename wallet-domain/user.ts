import {Wallet} from "./wallet";

export class User {
    public wallets: Wallet[]
    constructor(wallets: Wallet[]) {
        this.wallets = wallets
        wallets.forEach(w => {
            w.owner = this
        })
    }
}