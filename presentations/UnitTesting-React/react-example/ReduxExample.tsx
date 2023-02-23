import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, type Action } from 'redux'

export type CounterState = {
    counter: number
}

export const initialState: CounterState = {
    counter: 0
}

export enum CounterActions {
    increment = 'increment',
    decrement = 'decrement'
}

type CounterAction = Action<CounterActions>

export function counterReducer(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case CounterActions.increment:
            return { counter: state.counter + 1 }
        case CounterActions.decrement:
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

export function increment() {
    return { type: 'increment' }
}

export const store = createStore(counterReducer)

export type ReduxState = ReturnType<typeof counterReducer>

export function OurCounterReduxComponent() {
    const count = useSelector((state: CounterState) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Our Counter Component</h1>
            <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <span>Count is {count}</span>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </div>
        </div>
    )
}