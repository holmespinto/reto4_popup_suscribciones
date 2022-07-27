📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Popup de Suscripción 

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Popup de suscripción para descuento en primera compra: Popup que solicite al usuario su correo electronico para otorgarle un descuento en su primera compra. Si el correo ya se encuentra en la base de datos se le debe mostrar un mensaje que le indique que ya se encuentra inscrito. Si el cliente cerro el popup no deberia volverle a aparecer.

## Configuración
![plantilla](https://user-images.githubusercontent.com/70826804/181163089-fdb54df8-97bf-4b78-8187-2abfd50e3b61.png)

Para desarrollar el Popup de suscripción se tuvo en cuenta la configuración del schema en el archivo [schemaSubscription.ts](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/schema/schemaSubscription.ts)  la estructura fue diseñada para que en el Site Editor, el administrador, lo encontrará como se nos muestra en la siguiente imagen.

![07](https://user-images.githubusercontent.com/70826804/181164000-372b97e6-7a80-47a0-9961-d41edae451b3.png)

Para la implementación del componente en React se explican en los siguientes pasos:

1. Desarrollamos una Clase [Api.ts](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/Api/Api.ts) para consultar el EndPonit donde se verifica si el correo digitado esta registrado en la lista de suscripciones.
2. Implementamos un componente [ButtonEmail.tsx](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/ButtonEmail.tsx) que ejecuta las función handleChange en el onChange, que permite enviar la variable email al componente Padre para sus respectivas validaciones. Tambien, dentro de este componente se
ejecuta la función handleSend la cual permite enviar a la Api la variable email para verificarla en el endpoit, o en el localstore su existencia.
3. El componente Padre contiene todas las variables de inicio, como las funciones principales, [Subscriptions](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/Subscriptions.tsx).
4. Los componentes anteriores se ubicaron dentro del Modal para persistir en la tienda, hasta que se cerrará la ventana o el cliente tomará la suscripción.

## Conclusiones 
Para obtener los resultados anteriores se consultó en la documentación de los siguientes link:
- [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms). 
- [css-handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization)
- [react-jsonschema](https://react-jsonschema-form.readthedocs.io/en/latest/)
<!-- DOCS-IGNORE:end -->

