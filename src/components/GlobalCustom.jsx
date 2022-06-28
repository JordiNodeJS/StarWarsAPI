import { Global } from '@mantine/core'
import medium from '../fonts/DIN_Medium.woff2'
import bold from '../fonts/DIN_Bold.woff2'
import condensedRegular from '../fonts/DIN_Next_W01_Condensed_Regular.woff2'
import black from '../fonts/DIN_Black.woff2'
import starBold from '../fonts/star_bold.woff'

export function GlobalCustom() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'DIN Medium',
            src: `url('${medium}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'DIN Black',
            src: `url('${black}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'DIN Next W01 Condensed Regular',
            src: `url('${condensedRegular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'DIN Bold',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Star Bold',
            src: `local('${starBold}') format("woff")`,
            fontWeight: 900,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  )
}
