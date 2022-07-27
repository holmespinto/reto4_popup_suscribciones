// se desarrollo una  clase para optener el valor de la "Promo Envio Gratis"
class APICore {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  getDatos = (email: string) => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'Promotion',
      },
    }

    // Endpoint donde se consulta el valor de la promo
    const url = `https://holmes--itgloberspartnercl.myvtex.com/api/dataentities/CL/search?email=${email}`
    const getconsultar = async () => {
      try {
        const res = await fetch(url, options)
        const datos = await res.json()

        return datos
      } catch (error) {
        console.log(error)
      }
    }

    return getconsultar()
  }
}

export default APICore
