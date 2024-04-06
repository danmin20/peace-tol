import { useNavigate } from 'react-router-dom'

import {
  descriptionCss,
  iconCss,
  inputCss,
  nextIconCss,
  titleCss,
  wrapperCss
} from './style'
import { LogoBlack, Next } from '../../assets'

export const Review = () => {
  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/') //TODO
  }

  return (
    <div css={wrapperCss}>
      <LogoBlack css={iconCss} />
      <h1 css={titleCss}>
        다른 분들을 위해
        <br />
        후기도 남겨주세요!
      </h1>
      <p css={descriptionCss}>작성은 선택이지만, 즐거움을 공유해봐요. :)</p>
      <input css={inputCss} placeholder="한 줄 후기" />
      <Next css={nextIconCss} onClick={handleNextClick} />
    </div>
  )
}
