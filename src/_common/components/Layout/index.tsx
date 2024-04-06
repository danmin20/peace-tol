import { innerCss, wrapperCss } from './style'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div css={wrapperCss}>
      <div css={innerCss}>{children}</div>
    </div>
  )
}
