// Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

let usuario = 'fati';
let contraseña = '1234';
let intentos = 0;


while (intentos < 3) {
    let nombre = prompt('INGRESE SU USUARIO');
    let pasword = prompt('INGRESE SU CONTRASEÑA');
    
    if (nombre === usuario && pasword === contraseña) {
        alert('BIENVENIDA FATI');
        break;
    }; 

    if (intentos === 2) {
        alert('Señor se equivoco demasiadas veces')
    };

    intentos ++
};