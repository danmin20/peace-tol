import {
  containerCss,
  labelCss,
  lineCss,
  numberCss,
  radioCss,
  ratingTextContainerCss,
  wrapperCss
} from './style'

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
          <input
            type="radio"
            css={radioCss}
            checked={selected === item.value}
            onChange={() => onSelected(item.value)}
          />
          {selected === item.value && (
            <div key={item.value} css={ratingTextContainerCss}>
              <p css={numberCss}>{item.value}</p>
              <label css={labelCss}>{item.label}</label>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
