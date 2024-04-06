import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const HeaderStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50px',
  width: '100%',
  padding: '0px 18px',
  backgroundColor: color.white,
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1
})
