import { css } from '@emotion/react'

export const App = () => {
  return <div css={containerCss}>App</div>
}
const containerCss = css({
  backgroundColor: 'red'
})
