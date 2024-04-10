import { Outlet } from 'react-router-dom'

import { innerCss, wrapperCss } from './style'
import { Splash } from '../Splash'
import { SplashWrapper } from '../SplashWrapper'

export const Layout = () => {
  return (
    <div css={wrapperCss}>
      <div css={innerCss}>
        <SplashWrapper timeout={4000} splash={<Splash />}>
          <Outlet />
        </SplashWrapper>
      </div>
    </div>
  )
}
