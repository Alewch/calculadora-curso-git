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
      return a/b;
  }

  potencia(base, exponente) {
    return base ** exponente;
  }

  raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  porcentaje(a, b) {
    if (b === 0) {
      return "Error: División por cero en el cálculo de porcentaje";
    }
    return (a / b) * 100;
  }

  calcularResto(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a % b;
  }
  
  logaritmoNatural(a) {
    if (a <= 0) {
        throw new Error("El logaritmo solo acepta números positivos");
    }
    return Math.log(a);
 }

  maximoArray(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      return "Error: Ingrese un array de números válido";
    }
    return Math.max(...numeros); 
  }

  factorial(n){
    if (n < 0) {
        return "Error: El factorial no está definido para números negativos";
    }
    if (n === 0 || n === 1) {
        return 1;
    }else {
      return n * this.factorial(n - 1);
    }
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
console.log('- calc.porcentaje(a, b)');
console.log('- calc.maximoArray(array)');