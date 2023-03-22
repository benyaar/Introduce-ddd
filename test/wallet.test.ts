import {User} from "../wallet-domain/user";

describe('wallets-domain', ()=>{
    it('it should crate User and Wallet',  () => {
        const user = new User()
        const wallet = user.createWallet()
        const wallet2 = user.createWallet()

        expect(user.wallets.length).toBe(2)
        expect(wallet.owner).toBe(user)
        expect(wallet2.owner).toBe(user)
        expect(wallet.balance).toBe(0)
    });

  it('Money on user wallet',  () => {
    const user = new User()
    const wallet = user.createWallet()

    user.addMoneyToBalance(100, wallet)

    expect(wallet.balance).toBe(100)
    expect(user.getTotalBalance()).toBe(100)
  });

  it('shouldn`t add money to User wallet if money amount 0 or less ',  () => {
    const user = new User()
    const wallet = user.createWallet()

    const func = () => user.addMoneyToBalance(-100, wallet)

    expect(func).toThrowError()
  });

  it('total balance',  () => {
    const user = new User()
    const wallet = user.createWallet()
    const wallet2 = user.createWallet()

    user.addMoneyToBalance(100, wallet)
    user.addMoneyToBalance(100, wallet2)

    expect(user.getTotalBalance()).toBe(user.wallets.reduce((acc, w) => {
      acc += w.balance
      return acc
    },0))
  });

  it('check wallets owner',  () => {
    const user = new User()
    const user2 = new User()
    const wallet2 = user2.createWallet()

    const func = () => user.addMoneyToBalance(100, wallet2)
    expect(func).toThrowError()
  });
})
