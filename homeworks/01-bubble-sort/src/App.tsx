import React from 'react'
import ArrayComponent from './array/array'
import { generateRandomArray } from './utils/random'

import './index.css'
import { bubbleSort } from './utils/sort'

const STEP_DELAY = 300

type State = {
  array: number[]
  activeIndex: number;
  done: boolean;
}

class App extends React.Component {
  state: State = {
    array: [],
    activeIndex: 0,
    done: false,
  }

  componentDidMount() {
    const array = generateRandomArray()
    this.setState({ array })

    const sorter = bubbleSort(array)
    this.doSortStep(sorter)
  }

  render() {
    return <ArrayComponent
      array={this.state.array}
      activeIndex={this.state.activeIndex}
    ></ArrayComponent>
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