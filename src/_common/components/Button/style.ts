import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const ButtonStyle = css({
  borderRadius: '12px',
  color: color.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '82px',
  height: '43px',
  fontWeight: 600,
  fontSize: '16px',
  cursor: 'pointer'
})

export const FullWidthButtonStyle = css(ButtonStyle, {
  width: '100%',
  height: '58px',
  fontWeight: 700,
  fontSize: '18px'
})
