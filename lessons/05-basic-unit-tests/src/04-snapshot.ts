export const createParagraph = (text: string): string =>
  `<p>${text}</p>`

export const createDocument = (title: string, content: string) => ({
  head: {
    title,
  },
  body: {
    content,
  },
})
