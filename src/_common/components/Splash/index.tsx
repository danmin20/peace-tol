import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import {
  logoCss,
  peaceTolTextCss,
  subTitleCss,
  titleCss,
  wrapperCss
} from './style'
import { LogoWhite } from '../../../assets'

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
          <p css={peaceTolTextCss}>‘Peace’ -tol</p>
          <LogoWhite css={logoCss} />
          <p css={titleCss}>피스톨</p>
          <p css={subTitleCss}>— 평화로움을 새로이 깨다</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
