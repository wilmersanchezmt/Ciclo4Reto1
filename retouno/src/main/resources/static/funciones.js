function validar(){
    const usuario=document.getElementById('usuario');
    const email=document.getElementById('email');    
    const clave=document.getElementById('clave');
    const clave2=document.getElementById('clave2');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (usuario.value.length==0) {
        alert("Nombre no ingresado")
        usuario.focus()
        return 0;        
    }

    if (email.value.length==0) {
        alert("Tiene que escribir email")
        email.focus()
        return 0;        
    }

    if (expReg.test(email.value)==false) {
        alert("Tiene que escribir un email valido")
        email.focus()
        return 0;
        
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;
        
    }

    if (clave2.value.length==0) {
        alert("Tiene que confirmar la contraseña")
        clave2.focus()
        return 0;
        
    }

    if (clave.value!=clave2.value) {
        alert("Las contraseñas deben coincidir")
        clave.focus();
        return 0;
        
    }

    var datos = {
        name: $("#usuario").val(),
        email: $("#email").val(),
        password: $("#clave").val(),
        // password2: $("#clave2").val(),

    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),

        url: "http://localhost:8081/api/user/new",


        success: function (response) {
            $("#usuario").val("");
            $("#email").val("");
            $("#clave").val("");
            $("#clave2").val("");

            console.log(response);
            console.log("Se guardo correctamente");
            alert("Registro exitoso");
            // window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            // window.location.reload()
            alert("No se guardo correctamente");


        }
    }
    );

}

