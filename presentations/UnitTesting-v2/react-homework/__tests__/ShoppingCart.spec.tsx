import '@testing-library/jest-dom'

import React from 'react';
import ShoppingCart from "../ShoppingCart";
import { render, waitFor, act } from "@testing-library/react";

const fetchStuffMock = jest.fn().mockImplementation(() => Promise.resolve([
    { name: "Item 1" },
    { name: "Item 2" },
    { name: "Item 3" },
    { name: "Item 4" },
]))

describe.skip("ShoppingCart", () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.runOnlyPendingTimers()
        jest.useRealTimers()
    })

    test('setTimeout example', async () => {
        const { getByText, getByPlaceholderText, debug } = render(<ShoppingCart fetchStuff={fetchStuffMock} />)
        await act(() => {
            expect(getByText("Item 1")).toBeInTheDocument()
            debug()
        })
    })

    // test('fetch example', async () => {
    //     const { getAllByRole } = render(<ShoppingCart fetchStuff={fetchStuffMock} />)
    //     const listItem = await waitFor(() => getAllByRole('listitem'))

    //     expect(listItem).toHaveLength(4)
    // });
});
