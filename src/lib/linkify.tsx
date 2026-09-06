import React from "react"

const urlRegex = /(https?:\/\/[^\s<]+)/g

export function linkify(text: string): React.ReactNode {
  const parts = text.split(urlRegex)
  return parts.map((part, i) => {
    if (urlRegex.test(part)) {
      return React.createElement(
        "a",
        {
          key: i,
          href: part,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-primary hover:underline",
        },
        part
      )
    }
    return part
  })
}
