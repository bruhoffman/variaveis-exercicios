//**a)** Declare uma variável para armazenar um **nome**, sem atribuir um valor a essa variável.
const nome;

//**b)** Declare uma variável para armazenar uma **idade**, sem atribuir um valor a essa variável.
const idade;

// **c)** Imprima na tela o **tipo** dessas variáveis que acabou de criar, usando o comando `typeof`.
console.log("tipo da variável 'nome':", typeof nome);
console.log("tipo da variável 'idade':", typeof idade);

// **d)** Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
// Comentário: As variáveis 'nome' e 'idade' foram classificadas como 'undefinied', porque não foi atribuido nenhum valor para elas no ato da declaração.

console.log("-----------------------------------------------")

//**e)** Depois, disso, atualize o código para **perguntar** ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
const nomeAluno = prompt("Digite teu nome:");
const idadeAluno = +prompt("Digite a tua idade:");

//**f)** Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
console.log("Tipo da variável 'nomeAluno':", typeof nomeAluno);
console.log("Tipo da variável 'idadeAluno':", typeof idadeAluno);
// Comentário: No trecho acima do código (linhas 17 e 18), no ato da declaração das variáveis, via prompt, foi atribuido valores às variáveis. Todas as informações inseridas via 'prompt' são definidas como 'string', entretando, adicionei o sina de '+' no prompt da idadeAluno para que esta seja uma variável do tipo 'number'.

console.log("-----------------------------------------------")

//**g)** Para finalizar, imprima na tela a mensagem: "Olá, `nome`,  você tem `idade` anos". Lembre-se: `nome` e `idade` são os valores inseridos pelo usuário.
console.log("Olá, " + nomeAluno + ", você tem " + idadeAluno + " anos!");