import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render, waitFor, fireEvent, act } from "@testing-library/react"

import { OurCounterReduxComponent, counterReducer, CounterActions } from "../ReduxExample"

describe("OurCounterReduxComponent", () => {
    it('should render', async () => {
        const { debug } = render(
            <Provider store={createStore(counterReducer)}>
                <OurCounterReduxComponent />
            </Provider>
        )

        debug()
    })

    test("redux actions", () => {
        const store = createStore(counterReducer)
        const { dispatch } = store

        dispatch({ type: CounterActions.increment })
        dispatch({ type: CounterActions.increment })
        dispatch({ type: CounterActions.decrement })

        expect(store.getState()).toEqual({ counter: 1 })
    })

    describe('clicking the button triggers the dispatch and changes the state', () => {
        const store = createStore(counterReducer, { counter: 0 })
        const dispatch = jest.spyOn(store, "dispatch")

        test('clicking the increment button', async () => {
            const { getByRole, getByText, debug } = render(
                <Provider store={store}>
                    <OurCounterReduxComponent />
                </Provider>
            )

            const incrementButton = getByRole('button', { name: '+' })
            const decrementButton = getByRole('button', { name: '-' })
            
            fireEvent.click(incrementButton)
            fireEvent.click(incrementButton)
            fireEvent.click(decrementButton)
            fireEvent.click(incrementButton)

            expect(dispatch).toHaveBeenCalledTimes(4)
            expect(dispatch).toHaveBeenNthCalledWith(1, { type: 'increment' })
            expect(dispatch).toHaveBeenNthCalledWith(2, { type: 'increment' })
            expect(dispatch).toHaveBeenNthCalledWith(3, { type: 'decrement' })
            expect(dispatch).toHaveBeenNthCalledWith(4, { type: 'increment' })

            expect(store.getState()).toEqual({ counter: 2 })
            expect(getByText('Count is 2')).toBeInTheDocument()
        })
    })
})