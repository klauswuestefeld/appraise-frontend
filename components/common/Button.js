import css from '../../theme/variables'
import { hexToRgba } from '../../theme/utils'

export default `
  background-color: ${css.color.deYork};
  border-radius: 3px;
  border: 0;
  box-shadow: 0 1px 1px 0 ${hexToRgba(css.color.tundora, 0.22)};
  color: ${css.color.white};
  font-family: ${css.font.family};
  font-size: 16px;
  font-weight: 600;
  height: 40px;
  line-height: 0.88;
  text-align: center;
  width: 154px;

  &:hover {
    cursor: pointer;
  }
`
