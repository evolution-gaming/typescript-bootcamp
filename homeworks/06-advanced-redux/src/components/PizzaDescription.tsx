import React from "react";

interface PizzaDescriptionProps {
    desc: string;
}

export function PizzaDescription({ desc }: PizzaDescriptionProps) {
    return (
        <p className="mt-2 text-gray-500">{desc}</p>
    );
}
