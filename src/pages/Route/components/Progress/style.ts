import { css } from '@emotion/react'

import { color } from '../../../../_common/styles/color'

export const Background = css({
  position: 'relative',
  width: '139px',
  height: '14px',
  borderRadius: '20px',
  backgroundColor: color.red3
})

export const Bar = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
  height: '100%',
  borderRadius: '20px',
  backgroundColor: color.red
})
