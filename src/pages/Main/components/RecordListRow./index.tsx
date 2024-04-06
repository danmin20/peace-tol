import { format } from 'date-fns'

import {
  containerCss,
  durationCss,
  formatDateCss,
  ratingWrapperCss,
  textWrapperCss
} from './style'
import { Gun1, Gun2, Gun3, Star, StarFilled } from '../../../../assets'

type Props = {
  startDate: string
  endDate: string
  level: 1 | 2 | 3
  rating: number
}

export const RecordListRow = ({ startDate, endDate, level, rating }: Props) => {
  const duration = Math.floor(
    (new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000 / 60
  )

  const GunIcon = level === 1 ? Gun1 : level === 2 ? Gun2 : Gun3

  return (
    <div css={containerCss}>
      <GunIcon width={44} height={44} />
      <div css={textWrapperCss}>
        <p css={formatDateCss}>{format(new Date(endDate), 'M월 d일')}</p>
        <p css={durationCss}>{format(duration, 'hh시간 mm분')}</p>
      </div>
      <div style={{ flex: 1 }} />
      <div css={ratingWrapperCss}>
        {Array.from({ length: 5 }).map((_, index) =>
          rating > index ? (
            <StarFilled key={index} width={16} height={16} />
          ) : (
            <Star key={index} width={16} height={16} />
          )
        )}
      </div>
    </div>
  )
}
