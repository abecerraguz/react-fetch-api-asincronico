import React, { useEffect, useState } from 'react';

/*
Limpieza al desmontar
A veces, puede tener una situación en la que ha iniciado
algo dentro de una llamada useEffect que está en curso, 
como una llamada setInterval o una conexión de socket. 
Cuando el componente se desmonta, como cuando el usuario cambia a una ruta diferente,
es importante limpiar para que su aplicación no desarrolle una pérdida de memoria.

Para limpiar, opcionalmente puede devolver una función de su devolución de llamada useEffect. 
Por ejemplo, considere el siguiente código:

*/

export default function Time() {

    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
        const int = setInterval(
            () => setTime(new Date().toLocaleString()),
            1000
        );

        /*
        Veamos lo que sucede en el cuerpo de nuestra devolución de llamada useEffect. Creamos una variable int y la asignamos al resultado de invocar la función setInterval. Pasamos dos argumentos setInterval: (1) una función anónima que actualiza la hora con la hora actual, y (2) el intervalo, que es 1000 milisegundos, o 1 segundo. Luego devolvemos una función llamada clearInt (también podría ser una función anónima o incluso una flecha) que borra el intervalo. Si no hiciéramos esto, nuestra aplicación continuaría ejecutando la devolución de llamada setInterval a intervalos de 1 segundo hasta que el usuario realizara una actualización completa o abandonara la aplicación por completo.
        */
 
        return function clearInt() {
            clearInterval(int);
        }

    }, []);
    return (
     <p className="time">Fecha y Hora actual :{time}</p>
    )
}
