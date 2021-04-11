import React from 'react'
import ArrayComponent from './array-component'
import ControlsComponent from './controls-component'
import './index.css'
import TitleComponent from './title-component'
import { generateRandomArray } from './utils/random'
import { bubbleSort } from './utils/sort'

const STEP_DELAY = 200

type State = {
  array: number[]
  activeIndex: number | null;
  done: boolean | null;
}

class App extends React.Component {
  state: State = {
    array: generateRandomArray(),
    activeIndex: null,
    done: null,
  }
  private timeoutRef: NodeJS.Timeout | undefined;

  componentWillUnmount() {
    this.clearInterval()
  }

  render() {
    return (
      <>
        <TitleComponent done={this.state.done} />

        <ArrayComponent
          array={this.state.array}
          activeIndex={this.state.activeIndex}
        />

        <ControlsComponent
          onNewSet={() => this.newSet()}
          onStart={() => this.start()}
        />
      </>
    )
  }

  private newSet() {
    this.clearInterval()
    this.setState({
      done: null,
      activeIndex: null,
      array: generateRandomArray()
    })
  }

  private start() {
    this.setState({ done: false })
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

      this.timeoutRef = setTimeout(() => this.doSortStep(generator), STEP_DELAY)
    } else {
      this.setState({
        array: round.value,
        activeIndex: null,
        done: true
      })
    }
  }

  private clearInterval() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef)
    }
  }
}

export default App