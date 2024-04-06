import { motion } from 'framer-motion'

import {
  containerCss,
  labelCss,
  lineCss,
  numberCss,
  radioCss,
  ratingTextContainerCss,
  wrapperCss
} from './style'
import { color } from '../../../../_common/styles/color'

type Props = {
  selected: number
  onSelected: (value: number) => void
}

const ratingList: { value: number; label: string }[] = [
  {
    value: 1,
    label: '별로였어요.'
  },
  {
    value: 2,
    label: '그저 그랬어요.'
  },
  {
    value: 3,
    label: '괜찮았어요.'
  },
  {
    value: 4,
    label: '좋았어요.'
  },
  {
    value: 5,
    label: '최고였어요!'
  }
]

export const Rating = ({ selected, onSelected }: Props) => {
  return (
    <div css={wrapperCss}>
      <div css={lineCss} />
      {ratingList.map((item) => (
        <div key={item.value} css={containerCss}>
          <motion.input
            type="radio"
            initial={{
              backgroundColor: selected === item.value ? color.red : color.red3
            }}
            animate={{
              backgroundColor: selected === item.value ? color.red : color.red3
            }}
            css={radioCss}
            checked={selected === item.value}
            onChange={() => onSelected(item.value)}
          />
          {selected === item.value && (
            <div key={item.value} css={ratingTextContainerCss}>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0 }}
                css={numberCss}
              >
                {item.value}
              </motion.p>
              <motion.label
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                css={labelCss}
              >
                {item.label}
              </motion.label>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
