import { motion } from 'framer-motion'

import { Background, Bar } from './style'

type Props = {
  total: number
  stage: number
}

export const Progress = ({ total, stage }: Props) => {
  return (
    <div css={Background}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(stage / total) * 100}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        css={Bar}
      />
    </div>
  )
}
