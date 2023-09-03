// Calcular juros simples
function calcularJuros(principal, taxaDeJuros, periodo) {
    const juros = (principal * taxaDeJuros * periodo) / 100;
    return principal + juros;
}

// Função para formatar um valor como moeda em reais (R$)
function formatAsCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

// Função para calcular juros e exibir em reais
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const period = parseFloat(document.getElementById('period').value);

    // Calcular os juros
    const interest = (principal * interestRate * period) / 100;

    // Calcular o montante total (principal + juros)
    const totalAmount = principal + interest;

    // Exibir o resultado em reais
    document.getElementById('interestResult').textContent = isNaN(totalAmount) ? 'Preencha os campos corretamente' : formatAsCurrency(totalAmount);
}

// Event listener para acionar o cálculo
document.getElementById('calculateButton').addEventListener('click', calculateInterest);

// Função para verificar se um número é primo
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

// Função para validar a entrada e verificar se um número é primo
function checkPrime() {
    const primeNumber = parseInt(document.getElementById('primeNumber').value);
    const isPrimeResult = isPrime(primeNumber);
    document.getElementById('primeResult').textContent = isPrimeResult ? 'É primo' : 'Não é primo';
}

// Event listener para acionar a verificação de número primo
document.getElementById('checkPrimeButton').addEventListener('click', checkPrime);

// Função para converter número decimal em binário
function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
}

// Função para converter número decimal em hexadecimal
function decimalToHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

// Função para converter número decimal em binário e exibir
function convertToBinary() {
    const decimalNumber = parseInt(document.getElementById('decimalNumber').value);
    const binaryResult = decimalToBinary(decimalNumber);
    document.getElementById('binaryResult').textContent = binaryResult;
}

// Event listener para acionar a conversão de número decimal para binário
document.getElementById('convertToBinaryButton').addEventListener('click', convertToBinary);