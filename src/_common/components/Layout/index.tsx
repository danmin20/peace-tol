import { Outlet } from 'react-router-dom'

import { innerCss, wrapperCss } from './style'

export const Layout = () => {
  return (
    <div css={wrapperCss}>
      <div css={innerCss}>
        <Outlet />
      </div>
    </div>
  )
}
