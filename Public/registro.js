document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const email = document.getElementById('email').value;
    axios.post('http://localhost:3000/cuenta/registro', {
        usuario: usuario,
        contrasena: contrasena,
        email: email
    })
    .then(response => {
        console.log('Respuesta:', response.data);
        // Manejar la respuesta exitosa (por ejemplo, redirigir al usuario o guardar el token JWT)
    })
    .catch(error => {
        console.error('Error:', error.response.data);
        // Manejar errores (por ejemplo, mostrar un mensaje de error al usuario)
    });
});