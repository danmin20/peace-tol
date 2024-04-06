import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const LayoutStyle = css({
  paddingTop: '41px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  wordBreak: 'keep-all'
})

export const ContentStyle = css({
  padding: '0px 25px',
  display: 'flex',
  flexDirection: 'column',
  gap: '33px',
  alignItems: 'center',

  '> div:nth-of-type(1)': {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '44px',
    textAlign: 'center',
    marginTop: '40px',
    span: {
      color: color.red
    }
  }
})

export const BullseyeText = css({
  fontSize: '16px',
  lineHeight: '26.56px',
  position: 'absolute',
  color: color.red,
  bottom: '82px'
})

export const EndButton = css({
  fontSize: '14px',
  lineHeight: '23.24px',
  position: 'absolute',
  color: color.gray3,
  bottom: '44px'
})