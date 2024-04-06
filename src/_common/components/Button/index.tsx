import { ButtonStyle, FullWidthButtonStyle } from './style'
import { color } from '../../styles/color'

type Props = {
  isFullWidth?: boolean
  disabled?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
  content: string
}

export const Button = ({
  isFullWidth = false,
  disabled = false,
  type = 'primary',
  content
}: Props) => {
  const backgroundColor =
    type === 'primary'
      ? color.red
      : type === 'secondary'
        ? color.red1
        : color.red2

  return (
    <button
      css={isFullWidth ? FullWidthButtonStyle : ButtonStyle}
      style={{ backgroundColor }}
    >
      {content}
    </button>
  )
}
