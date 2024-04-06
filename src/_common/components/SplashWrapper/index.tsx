import { motion, AnimatePresence, AnimatePresenceProps } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  splash: React.ReactNode
  children: React.ReactNode
} & AnimatePresenceProps

export const SplashWrapper = ({ splash, children, ...props }: Props) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <AnimatePresence mode="wait" {...props}>
      <motion.div
        key={String(show)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {show ? splash : children}
      </motion.div>
    </AnimatePresence>
  )
}