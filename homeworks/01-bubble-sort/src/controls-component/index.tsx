import { FC } from "react"

import './index.css';

type Props = {
  onNewSet: () => void;
  onStart: () => void;
}

const ControlsComponent: FC<Props> = ({ onNewSet, onStart }) => {

  return (
    <div className="controls">
      <button type="button" onClick={onNewSet}>New Set</button>
      <button type="button" onClick={onStart}>Start</button>
    </div>
  )
}

export default ControlsComponent