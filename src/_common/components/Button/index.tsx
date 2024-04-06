import { motion, HTMLMotionProps } from 'framer-motion'
import Lottie from 'lottie-react'
import { useState } from 'react'

import { ButtonStyle, FullWidthButtonStyle, loadingLottieStyle } from './style'
import loadingJson from '../../../assets/loading.json'
import { color } from '../../styles/color'

type Props = {
  isFullWidth?: boolean
  isLoading?: boolean
  disabled?: boolean
  colorType?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  onAnimationCompleteClick?: () => void
} & HTMLMotionProps<'button'>

export const Button = ({
  isFullWidth = false,
  isLoading = false,
  disabled = false,
  colorType = 'primary',
  onAnimationCompleteClick,
  onClick,
  children,
  ...props
}: Props) => {
  const [isClicked, setClicked] = useState(false)
  const backgroundColor =
    colorType === 'primary'
      ? color.red
      : colorType === 'secondary'
        ? color.red1
        : color.red2

  return (
    <motion.button
      {...(!disabled ? { whileTap: { scale: 0.96 } } : {})}
      onAnimationComplete={(definition: Record<'scale', number>) => {
        console.log(isClicked)
        if (definition.scale === 1 && isClicked) {
          onAnimationCompleteClick?.()
        }
      }}
      onClick={(e) => {
        setClicked(true)
        onClick?.(e)
      }}
      css={isFullWidth ? FullWidthButtonStyle : ButtonStyle}
      style={{ backgroundColor: disabled ? color.gray3 : backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {isLoading ? (
        <Lottie
          animationData={loadingJson}
          loop={true}
          css={loadingLottieStyle}
        />
      ) : (
        children
      )}
    </motion.button>
  )
}
