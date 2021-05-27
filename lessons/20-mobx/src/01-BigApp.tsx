import * as React from "react"
import { action, makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import classnames from "classnames"

// Stores
const emodjis = ["🙂", "😵‍💫", "🤔", "🥳", "🤩", "😤", "👨‍💻", "🧦", "🍚"]

export class Emoji {
  id = Math.random()
  icon = ""
  rotated = false
  something = 10
  constructor(title: string) {
    makeAutoObservable(this, { rotate: action.bound })
    this.icon = title
  }
  rotate() {
    this.rotated = !this.rotated
  }
}

export class RandomEmojiList {
  emojies: Emoji[] = []
  constructor() {
    makeAutoObservable(this, { addRandomEmoji: action.bound })
  }
  addRandomEmoji() {
    const emojiIcon = emodjis[Math.floor(Math.random() * emodjis.length)]
    const emoji = new Emoji(emojiIcon)
    this.emojies.push(emoji)

    for (let e of this.emojies) {
      e.something += 1
    }
  }
}

// Clay
const StoreContext = React.createContext<RandomEmojiList>(undefined!)
const StoreProvider: React.FC<{ store: RandomEmojiList }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>

const useStore = () => {
  const store = React.useContext(StoreContext)
  return store
}

// Component
const EmojiListComponent = observer(() => {
  const EmojiList = useStore()
  return (
    <div>
      <h1>Emoji list</h1>

      <button onClick={EmojiList.addRandomEmoji}>Add emoji</button>

      <ul>
        {EmojiList.emojies.map((emoji) => (
          <EmojiElement emoji={emoji} key={emoji.id} />
        ))}
      </ul>
    </div>
  )
})

const EmojiElement: React.FC<{ emoji: Emoji }> = observer(({ emoji }) => {
  console.log("rendered", emoji.icon)
  return (
    <li onClick={emoji.rotate}>
      <div className={classnames("emoji", { rotated: emoji.rotated })}>
        {emoji.icon}
      </div>
    </li>
  )
})

// Bound
const store = new RandomEmojiList()
export const App = () => (
  <StoreProvider store={store}>
    <EmojiListComponent />
  </StoreProvider>
)
