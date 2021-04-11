import classNames from 'classnames'
import { FC } from 'react'
import { VALUES_RANGE } from '../utils/random'
import './index.css'

type Props = {
  array: number[]
  activeIndex: number | null
}

const maxValue = VALUES_RANGE[1]

const isActive = (index: number, activeIndex: number | null): boolean => {
  return activeIndex != null && (index === activeIndex || index === activeIndex + 1)
}

const ArrayComponent: FC<Props> = ({ array, activeIndex }) => {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <div
          key={index}
          className={classNames('element', { active: isActive(index, activeIndex) })}
          style={{ height: `${value / maxValue * 100}%` }}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export default ArrayComponent
