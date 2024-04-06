import { format, intervalToDuration } from 'date-fns'

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
  level: number
  rating: number
}

export const RecordListRow = ({ startDate, endDate, level, rating }: Props) => {
  const { hours, minutes } = intervalToDuration({
    start: new Date(startDate),
    end: new Date(endDate)
  })

  const GunIcon = level === 1 ? Gun1 : level === 2 ? Gun2 : Gun3

  return (
    <div css={containerCss}>
      <GunIcon width={44} height={44} />
      <div css={textWrapperCss}>
        <p css={formatDateCss}>{format(new Date(endDate), 'M월 d일')}</p>
        <p css={durationCss}>{`${hours || 0}시간 ${minutes || 0}분`}</p>
      </div>
      <div style={{ flex: 1 }} />
      <div css={ratingWrapperCss}>
        {Array.from({ length: 5 }).map((_, index) =>
          rating > index ? <StarFilled key={index} /> : <Star key={index} />
        )}
      </div>
    </div>
  )
}
