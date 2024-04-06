import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { innerCss, wrapperCss } from './style'

export const Layout = () => {
  useEffect(() => {
    localStorage.setItem('isFirstVisit', 'true')

    const handleBeforeUnload = () => {
      localStorage.removeItem('isFirstVisit')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return (
    <div css={wrapperCss}>
      <div css={innerCss}>
        <Outlet />
      </div>
    </div>
  )
}
