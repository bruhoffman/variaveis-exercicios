//Agora vamos criar 3 perguntas com valores de Sim ou Não.
//**a)** Crie um programa que faça 3 perguntas para o usuário **através do prompt**. Armazene a resposta de cada pergunta em uma variável.

const resposta1 = prompt("Você gosta de ouvir músicas? (Sim/Não)");
const resposta2 = prompt("Você gosta do estilo rock? (Sim/Não)");
const resposta3 = prompt("Você foi em algum show de rock? (Sim/Não)");

//**b)** Imprima no console todas as respostas.
console.log(resposta1, resposta2, resposta3);

console.log("------------------------------------------------")

//**c)** Altere seu programa para que os textos das perguntas sejam armazenados em 3 variáveis diferentes. 
//**d)** Troque o texto do seu prompt pelas variáveis que contêm as perguntas.

const perguntaA = "Você gosta de ouvir músicas? (Sim/Não)";
const respostaA = prompt(perguntaA);

const perguntaB = "Você gosta do estilo rock? (Sim/Não)";
const respostaB = prompt(perguntaB);

const perguntaC = "Você foi em algum show de rock? (Sim/Não)";
const respostaC = prompt(perguntaC);

//**e)** Altere o console para imprimir a pergunta e a resposta. 
console.log(perguntaA, respostaA);
console.log(perguntaB, respostaB);
console.log(perguntaC, respostaC);