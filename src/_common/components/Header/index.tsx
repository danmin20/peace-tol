import { HeaderStyle } from './style'

type Props = {
  handleBack: () => void
}

export const Header = ({ handleBack }: Props) => {
  return (
    <div css={HeaderStyle}>
      <div onClick={handleBack}>{'<'}</div>
    </div>
  )
}
