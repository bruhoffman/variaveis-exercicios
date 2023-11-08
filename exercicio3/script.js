//1) Este programa deve perguntar à pessoa colaboradora:
const nomeCompleto = prompt("Digite o nome completo:");
const dataNascimento = prompt("Digite a data de nascimento: 'dd/mm/aaa'");
const enderecoResidencial = prompt("Informe endereço residencial.");
const cpf = +prompt("Digite o CPF (somente números).");
const escolaridade = prompt("Escolaridade:");
const habilitacao = prompt("Possui CNH?");
const dependentes = +prompt("Quantos dependentes possui?");
const cargoAtual = prompt("Cargo atual:");
const salario = +prompt("Informe o salário:");
const comissionado = confirm("Recebe comissão? Se sim, clique em OK, caso contrário, clique em cancelar");
const anoAdmissao = +prompt("Informe o ano de admissão:")

//2) Utilize o **casting** para a conversão de tipos das variáveis que recebem números.
// Feito via a utilização do sinal de '+' em frente ao comando 'promot'.

//3) Imprima no console o tipo de todas as variáveis.
console.log("nomeCompleto:", typeof nomeCompleto);
console.log("dataNascimento:", typeof dataNascimento);
console.log("enderecoResidencial:", typeof enderecoResidencial);
console.log("cpf:", typeof cpf);
console.log("escolaridade:", typeof escolaridade);
console.log("habilitacao:", typeof habilitacao);
console.log("dependentes:", typeof dependentes);
console.log("cargoAtual:", typeof cargoAtual);
console.log("salario:", typeof salario);
console.log("comissionado:", typeof comissionado);
console.log("anoAdmissao:", typeof anoAdmissao);

console.log("-------------------------------------------------")

//4) Imprima no console um relatório da pessoa colaboradora.
console.log("Nome completo:", nomeCompleto);
console.log("Data de nascimento:", dataNascimento);
console.log("Endereço residencial:", enderecoResidencial);
console.log("CPF:", cpf);
console.log("Grau de Escolaridade:", escolaridade);
console.log("Possui CNH:", habilitacao);
console.log("Quantidade de dependentes:", dependentes);
console.log("Cargo atual:", cargoAtual);
console.log("Salário atual:", salario);
console.log("Comissionado:", comissionado);
console.log("Ano admissional:", anoAdmissao);