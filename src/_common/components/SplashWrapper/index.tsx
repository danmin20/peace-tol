import { Interpolation, Theme } from '@emotion/react'
import { motion, AnimatePresence, AnimatePresenceProps } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  active?: boolean
  loading?: boolean
  splash: React.ReactNode
  timeout?: number
  children: React.ReactNode
  style?: React.CSSProperties
  css?: Interpolation<Theme>
} & AnimatePresenceProps

export const SplashWrapper = ({
  active = true,
  loading = false,
  splash,
  timeout = 2000,
  children,
  style,
  css,
  ...props
}: Props) => {
  const [show, setShow] = useState(active)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShow(false)
    }, timeout)

    return () => clearTimeout(timerId)
  }, [])

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
      {
        //TODO: loading이 true일 때 로딩 컴포넌트를 렌더링하기
      }
    </AnimatePresence>
  )
}
