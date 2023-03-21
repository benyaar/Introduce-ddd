import {User} from "../wallet-domain/user";
import {Wallet} from "../wallet-domain/wallet";

describe('some', ()=>{
    it('s',  () => {
        const wallet1 = new Wallet()
        const wallet2 = new Wallet()

        const user = new User([wallet1, wallet2])

       // expect(user.wallets.length).toBe(2)
        //expect(wallet2.owner).toBe(user)
        expect(wallet1.owner).toBe(user)
    });
})
