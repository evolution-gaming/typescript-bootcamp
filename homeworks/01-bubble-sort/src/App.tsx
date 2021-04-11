import React from 'react'
import ArrayComponent from './array-component'
import { generateRandomArray } from './utils/random'

import './index.css'
import { bubbleSort } from './utils/sort'
import ControlsComponent from './controls-component'

const STEP_DELAY = 300

type State = {
  array: number[]
  activeIndex: number | null;
  done: boolean;
}

class App extends React.Component {
  state: State = {
    array: generateRandomArray(),
    activeIndex: null,
    done: false,
  }

  render() {
    return (
      <>
        <ArrayComponent
          array={this.state.array}
          activeIndex={this.state.activeIndex}
        />

        <ControlsComponent
          onNewSet={() => this.setState({ array: generateRandomArray() })}
          onStart={() => this.start()}
        />
      </>
    )
  }

  private start() {
    const sorter = bubbleSort(this.state.array)
    this.doSortStep(sorter)
  }

  private doSortStep(generator: Generator<any, any>,) {
    const round = generator.next()

    if (!round.done) {
      this.setState({
        array: round.value.array,
        activeIndex: round.value.index
      })

      setTimeout(() => this.doSortStep(generator), STEP_DELAY)
    } else {
      this.setState({
        array: round.value,
        activeIndex: null,
        done: true
      })
    }
  }
}

export default App