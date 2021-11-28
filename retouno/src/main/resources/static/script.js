function login() {
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


        url: "http://140.238.187.245:8081/api/user/" + credentials.email + "/" + credentials.clave,

        success: function (response) {
            if (response.name == 'NO DEFINIDO') {
                alert('Usuario o clave incorrectos!');
                return;
            }
            console.log(response);
            console.log("Bienvenido");
            alert("Acabas de iniciar sesion");

        },

        error: function (jqXHR, textStatus, errorThrown) {

            alert("Usuario no registrado");
        }
    });
}

///////////////////////////////////////////////////////////////////////////////

function nuevousuario() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const expReg = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (name.value.length == 0) {
        alert("Nombre no ingresado")
        usuario.focus()
        return 0;
    }

    if (email.value.length == 0) {
        alert("Tiene que escribir email")
        email.focus()
        return 0;
    }

    if (expReg.test(email.value) == false) {
        alert("Tiene que escribir un email valido")
        email.focus()
        return 0;

    }

    if (password.value.length == 0) {
        alert("Tiene que escribir una contraseña")
        password.focus()
        return 0;

    }

    if (password2.value.length == 0) {
        alert("Tiene que confirmar la contraseña")
        password2.focus()
        return 0;

    }

    if (password.value != clave2.value) {
        alert("Las contraseñas deben coincidir")
        password.focus();
        return 0;

    }

    var datos = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        // password2: $("#clave2").val(),

    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),

        url: "http://140.238.187.245:8081/api/user/new",


        success: function (response) {

            alert("Registro exitoso");
            $("#name").val("");
            $("#email").val("");
            $("#password").val("");
            $("#password2").val("");

            // window.location.reload();
            // console.log(response);
            // console.log("Se guardo correctamente");
            alert("Registro exitoso");
            // window.location.reload();

        },

        error: function (jqXHR, textStatus, errorThrown) {
            // window.location.reload();
            alert("No se guardo correctamente");


        }
    });
    // window.location.reload();
}