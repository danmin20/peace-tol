import { HeaderStyle } from './style'
import { Back } from '../../../assets'

type Props = {
  extra?: React.ReactNode
  handleBack: () => void
}

export const Header = ({ extra, handleBack }: Props) => {
  return (
    <div css={HeaderStyle}>
      <Back onClick={handleBack} />
      {extra}
    </div>
  )
}
