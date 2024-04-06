import { css } from '@emotion/react'

import { color } from '../../../../_common/styles/color'

export const containerCss = css`
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 88px;
  background-color: ${color.white};
  box-shadow: 0px 5px 20px 0px rgba(97, 97, 97, 0.15);

  border-radius: 14px;
`

export const textWrapperCss = css`
  margin-left: 12px;
`

export const formatDateCss = css`
  font-family: GeekbleMalang2;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.3px;
  margin-bottom: 6px;
  color: ${color.red1};
`

export const durationCss = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.32px;
  color: ${color.gray2};
`

export const ratingWrapperCss = css`
  white-space: nowrap;
`
