import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const LayoutStyle = css({
  padding: '0px 35px',
  paddingTop: '39px',
  width: '100%',
  boxSizing: 'border-box',
  lineHeight: '32px'
})

export const TextGroup = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  div: {
    '&:nth-child(1)': {
      'font-size': '24px',
      fontWeight: 700,
      span: {
        color: color.red
      }
    },
    '&:nth-child(2)': {
      'font-size': '16px',
      fontWeight: 600,
      color: color.gray2
    }
  }
})

export const ButtonGroup = css({
  display: 'flex',
  gap: '19px',
  marginTop: '28px',
  alignItems: 'center',
  justifyContent: 'center'
})

export const StageInfo = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '37px',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: 600,
  color: color.red,
  marginTop: '43px'
})

export const FinishButtonStyle = css({
  position: 'absolute',
  width: '100%',
  left: 0,
  right: 0,
  bottom: '62px',
  padding: '0px 24px',
  boxSizing: 'border-box'
})
