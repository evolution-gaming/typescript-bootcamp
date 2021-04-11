import { FC } from 'react'
import { VALUES_RANGE } from '../utils/random'
import './index.css'

type Props = {
  array: number[]
}

const maxValue = VALUES_RANGE[1]

const ArrayComponent: FC<Props> = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          key={index}
          className="element"
          style={{ height: `${value / maxValue * 100}%` }}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export default ArrayComponent
