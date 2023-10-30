function HasBalancedBrackets(brackets) {
  const openBracketsStack = [] // se almacenarán los brackts de apertura que llegué por input
  const bracketPairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  }

  for (const bracket of brackets) { // 
    const openBracketMatched = bracketPairs[bracket] // si el bracket que está recorriendo el ciclo for coincide con algunos de los brackets de apertura de bracketPairs, devolverá su valor (que es el respectivo bracket de cierre), pero si no coincide, es decir, si el bracket que recorre es de cierre, será undefined porque no está en las keys del objeto declarado, por lo tanto no entra en la condición
    if (openBracketMatched) openBracketsStack.push(bracket) // si hay match (es decir, si no es undefined), entra en la condición y pushea el bracket de apertura en el stack

    if (Object.values(bracketPairs).includes(bracket)) { // Convierte los valores de bracketPairs en un array (que son los brackets de cierre) y luego verifica si el bracket que está actualmente recorriendo el ciclo for está incluido en tal array. Si el bracket actual es de cierre, entra en este if
      const lastOpenedBracket = openBracketsStack.pop() // saca el último corchete de apertura de la pila (LIFO)
      if (bracketPairs[lastOpenedBracket] !== bracket) return false // si el valor (bracket de cierre) del elemento de bracketPairs en la posición del último bracket de apertura sacado con el .pop() es diferente al bracket de cierre recorrido en el for, retorna false, puesto ya no se cumple la sintaxis correcta de los brackets 
    }
  }

  return openBracketsStack.length === 0 // Si antes no retorna false, el openBracketStack quedará vacío porque ya se habrán sacado y comparado todos los brackets de apertura con su respectivo b. de cierre. Eso significa que todos estaban con su pareja, por lo que la función dará true (esta comparación siempre da true si es que llega a esta línea)
}

console.log(HasBalancedBrackets("{[]()}")) // 'stack = {'

module.exports = HasBalancedBrackets
