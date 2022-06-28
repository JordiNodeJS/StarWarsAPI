import { Global } from '@mantine/core'

import DIN_Next_W01_Medium from '../fonts/DIN_Next_W01_Medium.woff2'
import DIN_Next_W01_Bold from '../fonts/DIN_Next_W01_Bold.woff2'


export default function GlobalCustom() {
  return (
    <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'DIN Next W01 Medium',
          src: `url('${DIN_Next_W01_Medium}') format("woff2")`,
          fontStyle: 'normal',
        },
      },
      {
        '@font-face': {
          fontFamily: 'DIN Next W01 Bold',
          src: `url('${DIN_Next_W01_Bold}') format("woff2")`,
          fontStyle: 'normal',
        }
      },
      ]}
    />
  )
}
