import { FC } from 'react'
import BarComponent from '../bar-component'
import './index.css'

type Props = {
  array: number[]
  activeIndex: number | null
}

const isActive = (index: number, activeIndex: number | null): boolean => {
  return activeIndex != null && (index === activeIndex || index === activeIndex + 1)
}

const ArrayComponent: FC<Props> = ({ array, activeIndex }) => {
  return (
    <div className="array-container">
      {array.map((value, index) => (
        <BarComponent
          key={index}
          value={value}
          active={isActive(index, activeIndex)}
        />
      ))}
    </div>
  )
}

export default ArrayComponent
