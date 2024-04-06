import { Fragment } from 'react'

import { stampCss, wrapperCss, targetIconCss, levelTextCss } from './style'
import { Logo } from '../../../assets'

type Props = {
  targetCount?: number
}

const targetLength = 5

export const TargetBox = ({ targetCount = 0 }: Props) => {
  const level = Math.floor(targetCount / targetLength) + 1
  const restTargetCount = targetCount % targetLength

  return (
    <div css={wrapperCss}>
      {Array.from({ length: targetLength }).map((_, i) => (
        <Fragment key={i}>
          {i < restTargetCount ? (
            <Logo css={targetIconCss} />
          ) : (
            <div css={stampCss}>
              {i === targetLength - 1 ? (
                <span css={levelTextCss}>LV. {level}</span>
              ) : null}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
