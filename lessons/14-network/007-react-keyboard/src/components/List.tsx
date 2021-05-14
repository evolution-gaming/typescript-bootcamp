import {useSelector} from "react-redux";
import React from "react";

export function List() {
  const emails = useSelector((state: { emails: [] }) => state.emails);
  return (
    <div>
      <ul className="p-1">
        {emails.map(email => (
          <li key={email}>{email}</li>
        ))}
      </ul>
    </div>
  )
}

