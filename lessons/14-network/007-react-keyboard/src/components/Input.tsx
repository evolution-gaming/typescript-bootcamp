import React from "react";
import {useSelector} from "react-redux";
import {State} from "../types";

export function Input({ text }: { text: string; }) {
  return (
    <div className="h-20 border-2 border-blue-900">
      <input value={text} className="h-full w-full p-1" />
    </div>
  );
}

export function InputConnected() {
  const search = useSelector((state: State) => state.search);
  return (
    <Input text={search} />
  );
}