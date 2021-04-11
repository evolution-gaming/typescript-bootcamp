import { FC } from "react"

import './index.css';

type Props = {
  done: boolean | null
}

const TitleComponent: FC<Props> = ({ done }) => {
  const doneStatus = done ? '✅' : done === false ? '👨🏻‍💻' : ''
  return (
    <h1 className="title">
      Bubble sort 🛁 {doneStatus}
    </h1>
  )
}

export default TitleComponent