export const getContentHtml = (body: string) => {
  const parser = new DOMParser()
  return parser.parseFromString(body, 'text/html').body.innerHTML
}
