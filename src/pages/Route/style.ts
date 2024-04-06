import { css } from '@emotion/react'

import { color } from '../../_common/styles/color'

export const LayoutStyle = css({
  padding: '0px 25px',
  paddingTop: '41px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  wordBreak: 'keep-all'
})

export const ContentStyle = css({
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

export const Buttons = css({
  display: 'flex',
  gap: '72px',
  position: 'absolute',
  bottom: '123px',
  alignItems: 'center',
  justifyContent: 'center'
})

export const EmptyIcon = css({
  width: '57px'
})

export const DimmedStyle = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 10,

  '> div:first-of-type': {
    marginBottom: '215px'
  }
})
