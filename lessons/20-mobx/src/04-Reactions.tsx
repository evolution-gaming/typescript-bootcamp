import {
  makeObservable,
  observable,
  computed,
  autorun,
  when,
  reaction,
} from "mobx"

class OrderLine {
  price = 0
  amount = 1

  constructor(price: number) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed,
    })
    this.price = price
  }

  get total() {
    console.log("[total]Computing...")
    return this.price * this.amount
  }
}

const order = new OrderLine(0)

// autorun(() => {
//   console.log("[Autorun] Total: " + order.total)
// })

// reaction(
//   () => order.amount,
//   (amount, prevAmount) => {
//     console.log("reaction", amount, prevAmount)
//   },
// )

when(
  () => order.amount > 1,
  () => {
    console.log(order.amount)
  },
)


order.amount = 5
order.amount = 4
order.price = 2

// order.price = 3

console.log("--------")

export const App = () => <p>Empty app</p>
