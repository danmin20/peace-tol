import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const HeaderStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: '50px',
  width: '100%',
  paddingLeft: '18px',
  backgroundColor: color.white,
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1
})
