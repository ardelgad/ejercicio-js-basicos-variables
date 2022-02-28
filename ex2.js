/**
 * Que sucede aquí?
 */

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;

 variable2 = 2;
 varialble3 = 4;
 variable4 = 1;
 variable1 = -7;

 console.log(variable4);

 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  * 1 porque hemos cambiado el valor de la variable.
  */

  variable2 = variable1;
  variable4 = variable2 * 2;

/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  * -14, la variable2 es igual a la variable1 (-7) y la multiplicamos por 2
  */

 console.log(variable4);