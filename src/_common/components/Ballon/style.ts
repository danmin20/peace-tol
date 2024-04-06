import { css } from '@emotion/react'

import { color } from '../../styles/color'

export const BallonStyle = css({
  padding: '7.5px 36px',
  backgroundColor: color.white,
  fontWeight: 500,
  fontSize: '16px',
  borderRadius: '0px 36px 36px 36px',
  boxShadow: '5px 5px 30px 0px #61616133',
  color: color.gray2,
  lineHeight: '26.56px',
  textAlign: 'center'
})

export const AlertBallonStyle = css(BallonStyle, {
  padding: '16px 36px',
  borderRadius: '36px 36px 36px 0px'
})
