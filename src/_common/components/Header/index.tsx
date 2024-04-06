import { HeaderStyle } from './style'
import { Back } from '../../../assets'

type Props = {
  handleBack: () => void
}

export const Header = ({ handleBack }: Props) => {
  return (
    <div css={HeaderStyle}>
      <div onClick={handleBack}>
        <Back />
      </div>
    </div>
  )
}
