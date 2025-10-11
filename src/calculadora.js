class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
<<<<<<< HEAD
    // TODO: Implementar división
    if(b===0) 
      return "Error division por cero";
    else 
      return a/b;
  }

  potencia(base, exponente) {
    return base ** exponente;
=======
    if (a === 0 || b === 0) {
      return "Error: no se puede dividir por cero.";
    }
      let division; 
      if (a > b) { 
        division = a / b;
      } else {
        division = b / a;
      }

    return division;
  }

  potencia(base, exponente) {
    return base ** exponente
>>>>>>> 8486090fbe7a1d0cdb155cf13fcacc76eba2f817
  }

  raizCuadrada(numero) {
    return Math.sqrt(numero);
  }
}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
