import { Fragment } from 'react'

import { stampCss, wrapperCss, targetIconCss, levelTextCss } from './style'
import { Logo } from '../../../assets'

type Props = {
  /**
   * 현재까지 미션을 수행한 횟수입니다.
   */
  targetCount?: number
}

const targetStampLength = 5

export const TargetBox = ({ targetCount = 0 }: Props) => {
  const level = Math.floor(targetCount / targetStampLength) + 1
  const restTargetCount = targetCount % targetStampLength

  return (
    <div css={wrapperCss}>
      {Array.from({ length: targetStampLength }).map((_, i) => (
        <Fragment key={i}>
          {i < restTargetCount ? (
            <Logo css={targetIconCss} />
          ) : (
            <div css={stampCss}>
              {i === targetStampLength - 1 ? (
                <span css={levelTextCss}>LV. {level}</span>
              ) : null}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
