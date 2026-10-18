import type { Aluno } from "../types/Aluno";

const aluno1 = { nome: "Ana", idade: 10, turma: "22", nota1: 10, nota2: 8 };
const aluno2 = { nome: "Carlos", idade: 11, turma: "22", nota1: 7, nota2: 6 };
const aluno3 = { nome: "Cláudio", idade: 10, turma: "23", nota1: 7.5, nota2: 9 };
const aluno4 = { nome: "Renato", idade: 11, turma: "23", nota1: 6, nota2: 5 };

export const lista: Aluno[] = [aluno1, aluno2, aluno3, aluno4];
