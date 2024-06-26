import { Fragment } from 'react'

import {
  levelTextCss,
  levelWrapperCss,
  lineGradientCss,
  targetBoxCss,
  targetIconCss
} from './style'
import { Logo, LogoGrey } from '../../../assets'
import { color } from '../../styles/color'

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
    <>
      <div css={levelWrapperCss}>
        <p css={levelTextCss} style={{ color: color.red }}>
          LV. {level}
        </p>
        <div css={lineGradientCss} />
        <p css={levelTextCss} style={{ color: color.gray4 }}>
          LV. {level + 1}
        </p>
      </div>
      <div css={targetBoxCss}>
        {Array.from({ length: targetStampLength }).map((_, i) => (
          <Fragment key={i}>
            {i < restTargetCount ? (
              <Logo css={targetIconCss} />
            ) : (
              <LogoGrey css={targetIconCss} />
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}
