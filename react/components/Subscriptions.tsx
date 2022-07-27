import React, { useState, useEffect } from 'react'
import { Modal, Alert } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

import style from './style.css'
import ButtonEmail from './ButtonEmail'
import SubscriptionsSchemas from './schema/schemaSubscription'
import APICore from './Api/Api'
// funcion que aplica el patron al texto de entrada

const api = new APICore()
/* FUNCION QUE PERMITE VALIDADR EL EMAIL */
const IMask = (value: string) => {
  const result1 = /^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(value)

  return result1
}

type ItemsSubscriptions = {
  porcentaje: number
  image: string
}
const CSS_HANDLES = ['container', 'modal', 'title', 'subTitle', 'input']

const Subscriptions = ({ porcentaje, image }: ItemsSubscriptions) => {
  // inicializamos la variable de entrada
  const [modal, setModal] = useState({ isModalOpen: true })
  const [hasError, setError] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [variation, setVariation] = React.useState('primary')
  const [alert, setAlert] = useState({
    mensaje: '',
    class: '',
  })

  const handles = useCssHandles(CSS_HANDLES)
  // funcion handleChange
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value: eventValue },
  }) => {
    setEmail(eventValue)
  }

  // funcion handleCloseModal
  const handleCloseModal = () => {
    setModal({ isModalOpen: false })
    localStorage.setItem('PopupClosed', 'close')
  }

  useEffect(() => {
    // aplicamos la mascara de entrada
    const valida = IMask(email)

    setError(valida)
  }, [email])

  const handleSend = (e: any) => {
    e.preventDefault()
    /* CONSULTAMOS LA API PARA VERIFICAR EL EMAIL DEL USUARIO */
    const respuesta = api.getDatos(email)

    respuesta.then((res) => {
      if (res) {
        if (res.length > 0) {
          setAlert({
            mensaje: 'El usuario ya estás registrado en esta promoción',
            class: 'warning',
          })
          setVariation('danger')
          localStorage.setItem('PopupClosed', 'close')
        } else {
          setAlert({
            mensaje: 'Felicitaciones!!, Fue registrado en la promición',
            class: 'warning',
          })
          /* REGISTRAMOS EL EMAIL DEL USUARIO */
          localStorage.setItem('RegitrarEmail', `${email}`)
          localStorage.setItem('PopupClosed', 'close')
          setVariation('primary')
        }
      }
    })
  }

  /* IMPRIMIMOS MENSAJES DE VALIDACION DEL CORREO */
  useEffect(() => {
    hasError
      ? setAlert({
          class: 'success',
          mensaje: 'Email escrito correctamente',
        })
      : setAlert({
          class: 'warning',
          mensaje: 'Digite correctamente el email',
        })
  }, [hasError])

  // CONTROLAMOS QUE EL POPUP FUE CERRADO
  // PARA NO MOSTRARLO EN LA TIENDA
  useEffect(() => {
    localStorage.getItem('PopupClosed') === 'close'
      ? setModal({ isModalOpen: true })
      : setModal({ isModalOpen: false })
  }, [])

  return (
    <React.Fragment>
      <div>
        <Modal isOpen={modal.isModalOpen} onClose={handleCloseModal}>
          <div
            style={{
              padding: '10px',
              color: '#585959',
              background: '#fafafa',
            }}
          >
            {alert.class ? (
              alert.class === 'success' ? (
                <Alert type="success">{alert.mensaje}</Alert>
              ) : (
                <Alert type="warning">{alert.mensaje}</Alert>
              )
            ) : (
              ''
            )}
          </div>
          <div className={handles.container}>
            <div className={handles.img}>
              <img className="d-block w-100" src={image} alt="Popup" />
              <div className={style.porcentaje}>
                <p className={style.p}>{porcentaje}</p>
              </div>
            </div>
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-50-ns">
                <p className="f3 f1-ns fw3 gray">
                  <ButtonEmail
                    handleChange={handleChange}
                    value={email}
                    handleSend={handleSend}
                    hasError={hasError}
                    variation={variation}
                  />
                </p>
              </div>
            </div>
            <div className="w-100 w-50-ns mv4 pv6-ns pl6-ns">
              <div className="w-100 mv6" />
            </div>
          </div>
        </Modal>
      </div>
    </React.Fragment>
  )
}

Subscriptions.defaultProps = {
  title: 'title',
  porcentaje: 3,
  image: './img/fondo.png',
}
Subscriptions.schema = SubscriptionsSchemas
export default Subscriptions
