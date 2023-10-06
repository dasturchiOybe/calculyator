let dark1 = document.querySelector('.dark1');
let dark2 = document.querySelector('.dark2');
let dark = document.querySelector('.dark');
let bottom = document.querySelector('.bottom');
let button = document.querySelectorAll('button');

dark1.addEventListener('click', () => {
    dark.style.background = '#A9DCFD';
    dark1.style.background = '#D8EEFF';
    dark2.style.background = 'transparent';
    dark.style.color = '#1f1e1e';
    bottom.style.background = '#fdfdfd23';
})
dark2.addEventListener('click', () => {
    dark.style.background = '#1B6A9C';
    dark1.style.background = 'transparent';
    dark2.style.background = '#003661';
    dark2.style.borderRadius = '40px';
    dark.style.color = '#FBFBFBCC';
    bottom.style.background = '#003661';
})



function clearResult() {
  document.getElementById('result').textContent = '';
}

function deleteLastChar() {
  var result = document.getElementById('result').textContent;
  document.getElementById('result').textContent = result.slice(0, -1);
}

function appendChar(char) {
  document.getElementById('result').textContent += char;
}

function evaluateExpression() {
  var expression = document.getElementById('result').textContent;

  try {
    var result = evaluate(expression);
    document.getElementById('last').textContent = result;
  } catch (error) {
    document.getElementById('result').textContent = 'xato';
  }
}

function evaluate(expression) {
  var sanitizedExpression = sanitizeExpression(expression);

  if (!isValidExpression(sanitizedExpression)) {
    throw new Error(`noto'g'ri ifoda`);
  }

  var result = eval(sanitizedExpression);

  if (!isFinite(result)) {
    throw new Error(`noto'g'ri natija`);
  }

  return result;
}

function sanitizeExpression(expression) {
  var sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
  return sanitizedExpression;
}

function isValidExpression(expression) {
  var operators = ['+', '-', '*', '/'];

  if (operators.includes(expression[0]) || operators.includes(expression[expression.length - 1])) {
    return false;
  }

  if (expression.includes('//') || expression.includes('/*') || expression.includes('*/')) {
    return false;
  }

  var parentheses = 0;

  for (var i = 0; i < expression.length; i++) {
    if (expression[i] === '(') {
      parentheses++;
    } else if (expression[i] === ')') {
      parentheses--;
    }

    if (parentheses < 0) {
      return false;
    }
  }

  return parentheses === 0;
}