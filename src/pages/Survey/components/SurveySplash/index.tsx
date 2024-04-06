import { logoCss, titleCss, wrapperCss } from './style'
import { TargetBox } from '../../../../_common/components/TargetBox'
import { Logo } from '../../../../assets'

export const SurveySplash = () => {
  const prevTargetCount = 7 //FIXME: API로 받아오기

  return (
    <div css={wrapperCss}>
      <Logo css={logoCss} />
      <h1 css={titleCss}>
        수고했어요!
        <br />
        특별한 시간이었길 바라요.
      </h1>
      <TargetBox targetCount={prevTargetCount} />
    </div>
  )
}
