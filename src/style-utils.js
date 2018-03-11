// style-utils.js
import { css } from 'styled-components'

export const media = {
  handheld: (...args) => css`
    @media (max-width: 679px) {
      ${css(...args)};
    }
  `,
}
