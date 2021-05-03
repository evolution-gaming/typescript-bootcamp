import * as React from "react"

export const Message = ({ message }: { message: string }) => (
  <div
    data-testid={"message-box"}
  >
    {message}
  </div>
)
