import { motion } from 'framer-motion'

import { HeaderStyle, spacingCss } from './style'
import { Back } from '../../../assets'

type Props = {
  extra?: React.ReactNode
  handleBack?: () => void
}

export const Header = ({ extra, handleBack }: Props) => {
  return (
    <>
      <div css={HeaderStyle}>
        {handleBack ? (
          <motion.div whileTap={{ scale: 0.9 }}>
            <Back onClick={handleBack} />
          </motion.div>
        ) : (
          <div />
        )}
        {extra}
      </div>
      <div css={spacingCss} />
    </>
  )
}
