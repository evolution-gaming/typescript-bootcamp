export type Pizza = {
    name: string;
    price: number;
    _id: string;
}

export type State = {
    pizza: Pizza[];
    basket: Array<Pizza & { count: number;}>;
}
