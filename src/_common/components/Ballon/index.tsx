import { HTMLMotionProps, motion } from 'framer-motion'

import { AlertBallonStyle, BallonStyle } from './style'

type Props = {
  children: React.ReactNode
  isAlert?: boolean
} & HTMLMotionProps<'div'>

export const Ballon = ({ children, isAlert = false, ...props }: Props) => {
  return (
    <motion.div css={isAlert ? AlertBallonStyle : BallonStyle} {...props}>
      {children}
    </motion.div>
  )
}
