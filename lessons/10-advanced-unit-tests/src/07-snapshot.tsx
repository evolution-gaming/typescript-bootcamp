import * as React from "react"

export const Message = ({ message, color }: { message: string, color?: string }) => (
  <div
    style={{
      color,
    }}
  >
    {message}
  </div>
)
