import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { logoCss, titleCss, wrapperCss, clipboard, alert } from './style'
import { TargetBox } from '../../_common/components/TargetBox'
import { Logo, Link } from '../../assets'

export const Finish = () => {
  const prevTargetCount = 7 //FIXME: API로 받아오기

  const location = useLocation()

  const [isCopied, setIsCopied] = useState(false)

  const adventureId = location.state?.adventureId

  const handleCopyClipBoard = async () => {
    if (!adventureId) return

    await navigator.clipboard.writeText(
      `https://peace-tol.com/adventure/${adventureId}`
    )
    setIsCopied(true)
  }

  return (
    <div css={wrapperCss}>
      <Logo css={logoCss} />
      <h1 css={titleCss}>
        수고했어요!
        <br />
        특별한 시간이었길 바라요.
      </h1>
      <TargetBox targetCount={prevTargetCount} />

      <div css={clipboard} onClick={handleCopyClipBoard}>
        <Link />
        <div>친구에게 공유하기</div>
      </div>
      {isCopied && <div css={alert}>링크가 클립보드에 복사되었습니다.</div>}
    </div>
  )
}
