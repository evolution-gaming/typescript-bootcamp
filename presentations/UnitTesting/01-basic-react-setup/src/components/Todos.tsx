import * as React from "react";

export type Todo = { id: number,title: string };
export type TodosProps = {getTodos: () => Promise<Array<Todo>>};

export const Todos: React.FC<TodosProps> = ({ getTodos }) => {
    const [todos, setTodos] = React.useState<Array<Todo>>([]);
    React.useEffect(() => { getTodos().then(setTodos) }, [getTodos]);

    return (
        <>
            <div data-testid="header">TODOS:</div>
            <ul>
                {todos.map(t => <li data-testid="todo" key={t.id}>{t.title}</li>)}
            </ul>
        </>
    );
}
