/*
//Unindo dois arrays em typescript
//array string

let nomes: string[] = ["Ana", "Marcos", "João"];
//console.log(nomes[2]);


//array em número
let idades: Array<number> = [9, 18, 27];
//console.log(idade[1]);

//Usando os dois arrays
console.log(`${nomes[0]} têm ${idades[2]} anos, já ${nomes[1]} têm ${idades[0]} anos e, por fim ${nomes[2]} têm ${idades[1]} anos.`);
// "Ana têm 27 anos, já Marcos têm 9 anos e, por fim João têm 18 anos."
*/

/*
//criando um type
type Identidade = {rg: number; nome: string; ano: number};
let User1: Identidade = {rg: 4596162, nome: "Henrique", ano: 2005};
console.log(User1.nome);
*/

/*tuplas
const coordenada: [number, number] = [23.5, -37.8];
console.log(coordenada[0]);
*/

//criando um type
/*
    let aluno = {
        nome: "Henrique",
        nota: 23,
        faltas: 4, 
    };

    console.log(aluno.nota);
*/

//criando um type
/*
type Carro = {
    modelo: string,
    cor: string,
}

let carro1: Carro = {
    modelo: "Sedã",
    cor: "Vermelho",
}

console.log(carro1.cor);
*/

//----------------------------
//Definindo um tipo para Produto
/*
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean;
};

//Criando um produto
let produto1: Produto = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
};

//Imprimindo o resultado
console.log(`${produto1.nome} custa R$ ${produto1.preco} e está em estoque? ${produto1.emEstoque}`);
*/

//----------------------------
//Definindo uma interface para Cliente
interface Cliente {
    nome: string;
    idade: number;
    vip: boolean;
};

//Criando um cliente
let cliente1: Cliente = {
    nome: "Maria",
    idade: 28,
    vip: true,
};

//Imprimindo os dados
console.log(`${cliente1.nome} tem ${cliente1.idade} anos e é VIP? ${cliente1.vip}`);