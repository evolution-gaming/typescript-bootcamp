import {act, render} from "@testing-library/react";
import {type Todo, Todos} from "./Todos";
import * as React from "react";

describe("Todos", () => {
    /**
     * This one is simple, we just check if header is present.
     * We know it must be present regardless if todos are fetched already or not
     */
    it("should render header TODOS:", () => {
        const [getTodos] = conditionalTodosPromise()
        const {getByTestId} = render(<Todos getTodos={getTodos} />)

        expect(getByTestId("header").textContent).toEqual("TODOS:")
    });

    /**
     * Let's say our component got mounted but we have not yet received response from server
     */
    it("should not render todos if there promise has not yet resolved", async () => {
        const [getTodos] = conditionalTodosPromise()

        const {getAllByTestId} = render(<Todos getTodos={getTodos} />);

        expect(() => getAllByTestId("todo")).toThrow();
    });

    /**
     * Here we are simulating that component mounted and server has sent response
     */
    it("should render list of todos", async () => {
        const [getTodos, resolve] = conditionalTodosPromise()

        const {getAllByTestId} = render(
            <Todos getTodos={getTodos} />
        );

        /**
         * Here we have to wrap resolve in act,
         * so that React would know that something has happened, and it should revalidate its state.
         */
        await act(async () => { resolve() })

        expect(getAllByTestId("todo").map(el => el.textContent)).toEqual(["123", "234"]);
    });
});

/**
 * Might be a bit mind-bending for some. Don't focus on implementation,
 * it will just allow us to delay resolution of promise for our tests.
 *
 * `getTodos` - we will use as dependency for Todos component,
 * `resolve` - we will use a trigger to send in the response to backend
 */
const conditionalTodosPromise = (): [() => Promise<Array<Todo>>, () => void] => {
    let resolve: null | ((todos: Array<Todo>) => void) = null;
    const getTodos = () => new Promise<Array<Todo>>((r) => { resolve = r });
    return [getTodos, () => resolve?.([{ id: 1, title: "123"}, { id: 2, title: "234"}])];
}
