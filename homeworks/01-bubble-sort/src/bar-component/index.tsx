import classNames from "classnames"
import { FC } from "react"
import { VALUES_RANGE } from "../utils/random"
import './index.css';

const maxValue = VALUES_RANGE[1]

type Props = {
  value: number;
  active: boolean
}

const BarComponent: FC<Props> = ({ value, active }) => {
  return (
    <div
      className={classNames('element', { active })}
      style={{ height: `${value / maxValue * 100}%` }}
    >
      <div className="element-text">{value}</div>
    </div>
  )
}

export default BarComponent