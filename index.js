let nome = prompt("Insira seu nome: ") || "";
let sobrenome = prompt("Insira seu sobrenome: ") ||"";

let nomeComp = `Nome Completo: ${nome} ${sobrenome}`;
let nomeCatalogo = `Nome de catálogo: ${sobrenome.toUpperCase()}, ${nome}`;

alert(nomeComp);
alert(nomeCatalogo);