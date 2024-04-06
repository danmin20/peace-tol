import { Interpolation, Theme } from '@emotion/react'
import { motion, AnimatePresence, AnimatePresenceProps } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  active?: boolean
  splash: React.ReactNode
  timeout?: number
  onTimeout?: () => void
  children: React.ReactNode
  style?: React.CSSProperties
  css?: Interpolation<Theme>
} & AnimatePresenceProps

export const SplashWrapper = ({
  active = true,
  splash,
  timeout = 2000,
  onTimeout,
  children,
  style,
  css,
  ...props
}: Props) => {
  const [show, setShow] = useState(active)

  useEffect(() => {
    if (!active) return
    setShow(active)
    const timerId = setTimeout(() => {
      setShow(false)
      onTimeout?.()
    }, timeout)

    return () => clearTimeout(timerId)
  }, [active])

  return (
    <AnimatePresence mode="wait" {...props}>
      <motion.div
        key={String(show)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        style={{ height: '100%', width: '100%', ...style }}
        css={css}
      >
        {show ? splash : children}
      </motion.div>
    </AnimatePresence>
  )
}
