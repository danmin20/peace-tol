import { css } from '@emotion/react'

export const wrapperCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const titleCss = css`
  position: absolute;
  top: calc(50% - 110px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 27px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
`

export const nextIconCss = css`
  position: absolute;
  right: 38px;
  bottom: 57px;
  width: 53px;
  height: 53px;
  cursor: pointer;
`
