import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Rating } from './components/Rating'
import { iconCss, spacingCss, titleCss, wrapperCss } from './style'
import { usePostFinishAdventureMutation } from '../../_common/api/adventure.api'
import { Button } from '../../_common/components/Button'
import { Logo } from '../../assets'

export const Survey = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [rate, setRate] = useState(5)

  const postFinishAdventureMutation = usePostFinishAdventureMutation()

  const handleNextClick = async () => {
    const adventureId = location.state?.adventureId
    if (!adventureId) return

    await postFinishAdventureMutation.mutateAsync({
      id: adventureId,
      body: { star: rate }
    })
    navigate('/finish', {
      state: { adventureId }
    })
  }

  return (
    <div css={wrapperCss}>
      <Logo css={iconCss} />
      <h1 css={titleCss}>모험은 어떠셨나요?</h1>
      <Rating selected={rate} onSelected={setRate} />
      <div css={spacingCss} />
      <Button
        onAnimationCompleteClick={handleNextClick}
        isFullWidth
        isLoading={postFinishAdventureMutation.isLoading}
      >
        완료!
      </Button>
    </div>
  )
}
