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
        const dispatch = jest.fn()
        const store = createStore(counterReducer, { counter: 0 })

        test('clicking the increment button', async () => {
            const { getByText, debug } = render(
                <Provider store={store}>
                    <OurCounterReduxComponent />
                </Provider>
            )

            const incrementButton = getByText('+')
            
            fireEvent.click(incrementButton)
            fireEvent.click(incrementButton)
            fireEvent.click(incrementButton)

            waitFor(() => expect(dispatch).toHaveBeenCalled())
            expect(store.getState()).toEqual({ counter: 3 })
            expect(getByText('Count is 3')).toBeInTheDocument()
        })
    })
})