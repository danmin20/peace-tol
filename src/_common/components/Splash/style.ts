import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const wrapperCss = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.red
})

export const logoCss = css({
  width: '100px',
  height: '100px',
  backgroundColor: color.white,
  marginBottom: '24px'
})

export const titleCss = css({
  marginBottom: '8px',
  fontSize: '24px',
  fontWeight: 600,
  color: color.white
})

export const subTitleCss = css({
  fontSize: '20px',
  fontWeight: 400,
  color: color.red2
})
