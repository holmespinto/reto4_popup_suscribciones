📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Popup de Suscripción 

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Popup de suscripción para descuento en primera compra: Popup que solicite al usuario su correo electronico para otorgarle un descuento en su primera compra. Si el correo ya se encuentra en la base de datos se le debe mostrar un mensaje que le indique que ya se encuentra inscrito. Si el cliente cerro el popup no deberia volverle a aparecer.

## Configuration 
![plantilla](https://user-images.githubusercontent.com/70826804/181163089-fdb54df8-97bf-4b78-8187-2abfd50e3b61.png)

Para desarrollar el componente se tuvo en cuenta la configuración del schema en el archivo [schemaSubscription.ts](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/schema/schemaSubscription.ts) se realizó la estructura para que el site editor se presente
como muestra la siguiente imagen.

![07](https://user-images.githubusercontent.com/70826804/181164000-372b97e6-7a80-47a0-9961-d41edae451b3.png)

Para la implementación del componente se explican los siguientes pasos:
1. Se desarrollo una Clase [Api.ts](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/Api/Api.ts) para utilizar el EndPonit donde se consulta si el correo esta registrado en la oferta;
2. Se Implemento un componente [ButtonEmail.tsx](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/ButtonEmail.tsx) que ejecuta las funcion handleChange en el onChange, que permite enviar la variable email al componente padre para sus respectivas vaidaciones. Tambien, dentro de este componente se
ejecuta la funcion handleSend la cual permite enviar a la Api la variable email para verificarla en el endpoit, o en el localstore su existencia.
3. El componente padre contiene todas las variables de inicio, como las funciones principales, [Subscriptions](https://github.com/holmespinto/reto4_popup_suscribciones/blob/master/react/components/Subscriptions.tsx), 

Para obtener estos resultados se estudiaron en la documentación los siguientes link:
- [VTEX Styleguide](https://styleguide.vtex.com/#/Components/Forms). 
- [css-handles](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization)
- [react-jsonschema](https://react-jsonschema-form.readthedocs.io/en/latest/)
<!-- DOCS-IGNORE:end -->

