import React from 'react'
import { OurComponent } from "../OurComponent"
import { render, waitFor, fireEvent, act } from "@testing-library/react"

describe("OurComponent", () => {
    it('should render', async () => {
        const {
            debug,
            container,
            getByText,
        } = render(<OurComponent />)

        debug()
        const ourComponentContainer = getByText("Our Component")
        console.log(container.outerHTML)
        console.log(ourComponentContainer.outerHTML)
    })

    // it('should have an h1', () => {
    //     const { getByRole } = render(<OurComponent />)
    //     const heading = getByRole("heading");

    //     expect(heading).toBeInTheDocument();
    //     expect(heading).toHaveTextContent("Our Component");
    // });

    // it('should have a list', () => {
    //     const { getByRole } = render(<OurComponent />);
    //     const list = getByRole("list");

    //     expect(list).toBeInTheDocument();
    //     expect(list.children).toHaveLength(4);
    // });

    // it('should filter items correctly', async () => {
    //     const { getByRole, getByPlaceholderText } = render(<OurComponent />);
    //     const list = getByRole("list")
    //     const input = getByPlaceholderText("our awesome input")

    //     expect(list).toBeInTheDocument()
    //     expect(input).toBeInTheDocument()
    //     expect(list.children).toHaveLength(4)

    //     fireEvent.change(getByPlaceholderText("our awesome input"), { target: { value: "one" } })
        
    //     await waitFor(() => {
    //         expect(list.children).toHaveLength(1)
    //     })
    // })

    // it('should click and filter', () => {
    //     const { getByRole, getByText, getByPlaceholderText } = render(<OurComponent />);
    //     const list = getByRole("list")
    //     const button = getByText("Search for item number four")

    //     fireEvent.click(button)

    //     expect(list.children).toHaveLength(1)
    //     expect(getByText("Lastly number four")).toBeInTheDocument()
    // })

    it('go to next page', async () => {
        jest.useFakeTimers()
        const { getByRole, getByText, getByPlaceholderText } = render(<OurComponent />);
        const list = getByRole("list")
        const button = getByText("Next page")

        fireEvent.click(button)

        act(() => {
            // jest.advanceTimersByTime(1000)
            jest.runOnlyPendingTimers()
        })

        expect(list.children).toHaveLength(4)

        expect(getByText("Item number five")).toBeInTheDocument()

        jest.useRealTimers()
    })
})