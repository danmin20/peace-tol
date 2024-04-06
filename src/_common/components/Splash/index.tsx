import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import { logoCss, subTitleCss, titleCss, wrapperCss } from './style'

export const Splash = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          css={wrapperCss}
        >
          <div css={logoCss} />
          <p css={titleCss}>피스톨</p>
          <p css={subTitleCss}>PeaceTol</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
