import { motion, AnimatePresence, AnimatePresenceProps } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  active?: boolean
  loading?: boolean
  splash: React.ReactNode
  children: React.ReactNode
} & AnimatePresenceProps

export const SplashWrapper = ({
  active = true,
  loading = false,
  splash,
  children,
  ...props
}: Props) => {
  const [show, setShow] = useState(active)

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
      {loading && <div>Loading...</div>}
    </AnimatePresence>
  )
}
