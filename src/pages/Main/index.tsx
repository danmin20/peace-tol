import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { RecordListRow } from './components/RecordListRow'
import {
  buttonWrapperCss,
  emptyRecordCss,
  logoCss,
  recordHeaderCss,
  recordScrollBoxCss,
  targetBoxCss,
  wrapperCss
} from './style'
import { useGetUserAdventureList } from '../../_common/api/adventure.api'
import { Button } from '../../_common/components/Button'
import { TargetBox } from '../../_common/components/TargetBox'
import { getUser } from '../../_common/utils/user'
import { Logo } from '../../assets'

export const Main = () => {
  const navigate = useNavigate()
  const uuid = getUser()!
  const { data } = useGetUserAdventureList(uuid, { enabled: !!uuid })

  return (
    <div css={wrapperCss}>
      <Logo css={logoCss} />
      <div css={targetBoxCss}>
        <TargetBox targetCount={data?.length} />
      </div>

      <div css={recordHeaderCss}>
        <p>나의 모험 기록</p>
      </div>
      <div css={recordScrollBoxCss}>
        {data?.map(({ createdAt, difficulty, endedAt, review_star }, index) => (
          <RecordListRow
            key={index}
            endDate={endedAt}
            level={difficulty}
            rating={review_star}
            startDate={createdAt}
          />
        ))}
        {(!data || data.length === 0) && (
          <div css={emptyRecordCss}>아직 기록이 없어요</div>
        )}
      </div>
      <motion.div
        css={buttonWrapperCss}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.5
        }}
      >
        <Button
          onAnimationCompleteClick={() => navigate('/level-select')}
          style={{ height: '80px' }}
          isFullWidth
        >
          나만의 모험 떠나기
        </Button>
      </motion.div>
    </div>
  )
}
