import './App.css'
import ArrayComponent from './array/array'
import { generateRandomArray } from './utils/random'

import './index.css'

function App() {
  const array = generateRandomArray(10)

  return <ArrayComponent array={array}></ArrayComponent>
}

export default App
