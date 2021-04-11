import Global from '../models/Global'

export const getAlquileres = async (id)=>{

   await fetch(Global.url_alquileres_clientes+'/'+id)
   .then(res => res.json())
   .then(data =>{console.log(data)})
}