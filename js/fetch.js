//Traer usuarios
async function traerUsuarios(){
    const response = await fetch("prueba/traerUsuario")
    const usuarios = await response.json()

}

   //Detenemos el get automatico
   const form = document.getElementById("formulario")
   form.addEventListener("submit", async (event)=>{
       event.preventDefault()
       //Crear usuario
       const nombre = document.getElementById("nombre").value;
       const password = document.getElementById("password").value;
       const response = await fetch("/prueba/crearUsuario",
           {
               method: "POST",

               headers: {
                   "Content-Type": "application/json"
               },

               body: JSON.stringify(
                   {
                       nombre,
                       password
                   }
               )
           });
       if (response.ok){
           alert("Usuario creado exitosamente")
       }
       else {
           alert("Ocurrió  un error")
       }
   })

   //Editar usuario
   async function editarUsuario(){
       const id = document.getElementById("idUsuario").value;
       const nombre = document.getElementById("nombre").value;
       const password = document.getElementById("password").value;
       const response = await fetch(`/prueba/editarUsuario/${id}`,{
           method: "PUT",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(
               {
                   nombre,
                   password
               }
           )
       });
      if (response.ok){
          alert("Usuario editado exitosamente")
      }
      else {
          alert("Ocurrió un error")
      }
   }

   //Eliminar usuario

async function eliminarUsuario(){
    const id = document.getElementById("idUsuario").value;
    const response = await fetch(`/prueba/eliminarUsuario/${id}`, {
        method: "DELETE"
    });
    if (response.ok){
        alert("Usuario eliminado exitosamente")
    }
    else {
        alert("Ocurrió un error")
    }

}