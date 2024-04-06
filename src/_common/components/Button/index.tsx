import { motion, HTMLMotionProps } from 'framer-motion'

import { ButtonStyle, FullWidthButtonStyle } from './style'
import { color } from '../../styles/color'

type Props = {
  isFullWidth?: boolean
  disabled?: boolean
  colorType?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
} & HTMLMotionProps<'button'>

export const Button = ({
  isFullWidth = false,
  disabled = false,
  colorType = 'primary',
  children,
  ...props
}: Props) => {
  const backgroundColor =
    colorType === 'primary'
      ? color.red
      : colorType === 'secondary'
        ? color.red1
        : color.red2

  return (
    <motion.button
      {...(!disabled ? { whileTap: { scale: 0.96 } } : {})}
      css={isFullWidth ? FullWidthButtonStyle : ButtonStyle}
      style={{ backgroundColor: disabled ? color.gray3 : backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  )
}
