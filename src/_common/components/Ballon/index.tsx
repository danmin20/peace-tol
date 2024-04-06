import { AlertBallonStyle, BallonStyle } from './style'

type Props = {
  children: React.ReactNode
  isAlert?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const Ballon = ({ children, isAlert = false, ...props }: Props) => {
  return (
    <div css={isAlert ? AlertBallonStyle : BallonStyle} {...props}>
      {children}
    </div>
  )
}
