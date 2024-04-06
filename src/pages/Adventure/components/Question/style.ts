import { css } from '@emotion/react'

import { color } from '../../../../_common/styles/color'

export const Wrapper = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: '20px',
  padding: '0px 49px',
  marginTop: '159px'
})

export const QStyle = css({
  fontFamily: 'GeekbleMalang2',
  fontSize: '40px',
  fontWeight: 400,
  color: color.red
})

export const QuestionStyle = css({
  marginTop: '48px',
  fontSize: '28px',
  fontWeight: 700,
  lineHeight: '44px',
  textAlign: 'center'
})

export const Buttons = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '62px',
  width: '100%'
})

export const ButtonStyle = css({
  width: '100%',
  height: '70.42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '16px',
  border: '0.5px solid rgba(187, 187, 187, 1)',
  fontSize: '20px',
  fontWeight: 600,
  backgroundColor: color.white,

  '&:active': {
    border: '2px solid rgba(255, 90, 90, 1)',
    backgroundColor: color.red3
  }
})
