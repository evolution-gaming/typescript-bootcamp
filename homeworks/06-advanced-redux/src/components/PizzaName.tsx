import React from "react";

interface PizzaNameProps {
    name: string;
}

export function PizzaName({ name }: PizzaNameProps) {
   return (
       <div className="block mt-1 text-lg leading-tight font-medium text-black">{name}</div>
   );
}
