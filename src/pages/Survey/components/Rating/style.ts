import { css } from '@emotion/react'

import { color } from '../../../../_common/styles/color'

export const wrapperCss = css`
  position: relative;
  display: flex;
  width: 100%;
`

export const lineCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 60px);
  height: 1px;
  background-color: ${color.red3};
`

export const containerCss = css`
  position: relative;
  flex: 1;
  text-align: center;
  color: ${color.red};
`

export const radioCss = css`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  appearance: none;
  background-color: ${color.red3};
  z-index: 1;
  cursor: pointer;
  &:checked {
    background-color: ${color.red};
  }
`

export const ratingTextContainerCss = css`
  position: absolute;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
`

export const numberCss = css`
  font-family: GeekbleMalang2;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
`

export const labelCss = css`
  font-size: 15px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  white-space: nowrap;
`
