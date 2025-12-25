//Traer usuarios
async function traerUsuarios(){
    const response = await fetch("https://backend-api-production-04d1.up.railway.app/usuario/traerUsuario")
    const usuarios = await response.json()
     const ul = document.getElementById("listaUsuarios");

    ul.innerHTML = ""; // limpia la lista

    usuarios.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.id} - ${user.nombre}`;
      ul.appendChild(li);
    });

}

   //Detenemos el get automatico
   const form = document.getElementById("formulario")
   form.addEventListener("submit", async (event)=>{
       event.preventDefault()
       //Crear usuario
       const nombre = document.getElementById("nombre").value;
       const password = document.getElementById("password").value;
       const response = await fetch("https://backend-api-production-04d1.up.railway.app/usuario/crearUsuarios",
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
       const response = await fetch(`https://backend-api-production-04d1.up.railway.app/usuario/editarUsuario/${id}`,{
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
    const response = await fetch(`https://backend-api-production-04d1.up.railway.app/usuario/eliminarUsuario/${id}`, {
        method: "DELETE"
    });
    if (response.ok){
        alert("Usuario eliminado exitosamente")
    }
    else {
        alert("Ocurrió un error")
    }

}