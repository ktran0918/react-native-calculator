function operatorToSymbol(operatorName) {
  switch (operatorName) {
    case 'plus':
      return '+';
    case 'minus':
      return '−';
    case 'multiply':
      return '×';
    case 'divide':
      return '÷';
    case 'power':
      return '^';
  }
}

function calculate(leftSide, rightSide, operator) {
  leftSide = Number(leftSide);
  rightSide = Number(rightSide);

  switch (operator) {
    case 'plus':
      return leftSide + rightSide;
    case 'minus':
      return leftSide - rightSide;
    case 'multiply':
      return leftSide * rightSide;
    case 'divide':
      return (leftSide / rightSide).toFixed(4);
    case 'power':
      return (Math.pow(leftSide, rightSide)).toPrecision(5);
  }
}

export default { operatorToSymbol, calculate };
