function validar2() {
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
  
    if (email.value.length == 0) {
      alert("Ingrese un usuario")
      email.focus()
      return 0;
    }
  
    if (clave.value.length == 0) {
      alert("Ingrese una contraseña")
      clave.focus()
      return 0;
  
    }
  
    let credentials = {
      email: $("#email").val(),
      clave: $("#clave").val(),
    };
  
    $.ajax({
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      
  
      url: "http://localhost:8081/api/user/" + credentials.email + "/" + credentials.clave,
  
      success: function (response) {
        if (response.name == 'NO DEFINIDO') {
          alert('Usuario o clave incorrectos!');
          return;
        }
        console.log(response);
        console.log("Bienvenido");
        alert("Acabas de iniciar sesion");

        $("#email").val("");
        $("#clave").val("");

      },
  
      error: function (jqXHR, textStatus, errorThrown) {
        
        alert("Usuario no registrado");
      }
    }
    );
  
  
  }