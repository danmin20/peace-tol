import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { logoCss, titleCss, wrapperCss, clipboard } from './style'
import { useGetUserAdventureCount } from '../../_common/api/adventure.api'
import { Button } from '../../_common/components/Button'
import { TargetBox } from '../../_common/components/TargetBox'
import { color } from '../../_common/styles/color'
import { getUser } from '../../_common/utils/user'
import { Logo, Link } from '../../assets'

export const Finish = () => {
  const uuid = getUser()!
  const { data } = useGetUserAdventureCount(uuid)

  const navigate = useNavigate()
  const location = useLocation()

  const [isCopied, setIsCopied] = useState(false)

  const adventureId = location.state?.adventureId

  const handleCopyClipBoard = async () => {
    if (!adventureId) return

    const text = `나 모험 다녀왔는데, 너도 한 번 해볼래?
    \n평화로운 일상에 심심함을 느끼진 않으셨나요?\n피스톨에서 함께 특별한 경험을 해보세요!
    \nhttps://peace-tol.netlify.app/adventure/${adventureId}`

    await navigator.clipboard.writeText(text)
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
      <TargetBox targetCount={data?.count} />
      <div
        css={clipboard}
        onClick={handleCopyClipBoard}
        style={{
          color: isCopied ? color.red : color.gray2
        }}
      >
        <Link />
        <div>
          {isCopied ? '링크가 클립보드에 복사되었습니다.' : '친구에게 공유하기'}
        </div>
      </div>

      <Button
        onClick={() =>
          navigate('/', {
            state: { isSplash: false }
          })
        }
        isFullWidth
      >
        메인으로 가기
      </Button>
    </div>
  )
}
