import React from "react";

interface CircleProps {
    type: "plus" | "minus";
    onClick: () => void;
}

export function Circle({ type , onClick }: CircleProps) {
    return (
        <div className="relative">
            <div
                onClick={onClick}
                className="absolute bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center bottom-0 right-0 cursor-pointer">
                <span>{type === "plus" ? "+" : "-"}</span>
            </div>
        </div>
    );
}
