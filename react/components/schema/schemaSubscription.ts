const SubscriptionsSchemas = {
  title: 'Botón de WhatsApp',
  type: 'object',
  properties: {
    title: {
      title: 'Título',
      description: 'Agregue por favor la imagen de fondo',
      type: 'string',
    },
    porcentaje: {
      title: 'Porcentaje',
      description: 'Agregue el porcentaje de  descuento',
      type: 'number',
      integerRange: {
        'ui:widget': 'range',
      },
    },
    image: {
      title: 'Imagen de fondo para el popup',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
  },
}
export default SubscriptionsSchemas
