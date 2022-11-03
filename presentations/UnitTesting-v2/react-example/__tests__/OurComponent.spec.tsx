import React from 'react';
import { OurComponent } from "../OurComponent";
import { render, waitFor } from "@testing-library/react";

describe("OurComponent", () => {
    test("debug", () => {
        const { getByText, debug } = render(<OurComponent />);
        debug();
    });

    it('should render', async () => {
        const { getByText } = render(<OurComponent />);
        expect(getByText("Our Component")).toBeInTheDocument();
    });

    it('should have an h1', () => {
        const { getByRole } = render(<OurComponent />);
        const heading = getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent("Our Component");
    });

    it('should have a list', () => {
        const { getByRole } = render(<OurComponent />);
        const list = getByRole("list");

        expect(list).toBeInTheDocument();
        expect(list.children).toHaveLength(4);
    });
});