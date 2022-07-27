import * as React from 'react'
import { Input, Button } from 'vtex.styleguide'

import style from './style.css'

type TypeButtonEmail = {
  value: string
  variation: string
  hasError: boolean
  handleChange: (date: any) => void
  handleSend: (date: any) => void
}
const ButtonEmail = (props: TypeButtonEmail) => {
  return (
    <>
      <div className={style.input_email}>
        <Input type="email" onChange={props.handleChange} value={props.value} />
      </div>
      <div className={style.contbutton}>
        <Button
          variation={`${props.variation}`}
          onClick={props.handleSend}
          disabled={!props.hasError}
          size="large"
        >
          <div className={style.text}>{'>'}</div>
        </Button>
      </div>
    </>
  )
}
export default ButtonEmail
