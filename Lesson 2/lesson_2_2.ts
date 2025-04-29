const { performance } = require('perf_hooks');

const start = performance.now();

import * as fs from 'fs';//Traz o fs pra ler o arquivo, beleza?

//Classe do nó – cada nó é um item na lista encadeada
class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;//Guarda o valor no nó
        this.next = null;//Proximo zerado
    }
}

//Função pra inserir um nó numa posição específica
function insertAtPosition(head: Node | null, data: number, pos: number): Node | null {
    const newNode = new Node(data);//Cria o nó com o valor

    //Se a posição for 1 ou a lista estiver vazia, coloca logo no começo
    if (pos === 1 || head === null) {
        newNode.next = head;//Cabeça agora vai ser o próximo
        return newNode;
    }

    let current: Node | null = head;
    let count = 1;
    while (current !== null && count < pos - 1) {
        current = current.next;//Vai pro próximo nó
        count++;
    }

    //Se a posição for maior que o tamanho da lista, mete no final
    if (current === null) {
        current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;//Coloca no final
    } else {
        newNode.next = current.next;//Coloca no meio da bagunça
        current.next = newNode;//Atualiza o ponteiro
    }

    return head;//Retorna a lista com a atualização
}

//Função pra remover a primeira ocorrência de um valor
function removeValue(head: Node | null, value: number): Node | null {
    if (head === null) return head;//Se a lista tá vazia, não tem o que fazer

    //Se o primeiro nó tem o valor, manda ele embora
    if (head.data === value) {
        const temp = head;
        head = head.next;//Atualiza a cabeça da lista para o próximo nó
        temp.next = null;//Desvincula o nó removido, sem mais referência
        return head;
    }

    let current = head;
    while (current.next !== null) {
        if (current.next.data === value) {
            const temp = current.next;
            current.next = current.next.next;//Remove o nó da lista
            temp.next = null;//Desvincula o nó removido
            break;
        }
        current = current.next;
    }

    return head;//Retorna a lista atualizada
}

//Função pra imprimir todos os valores da lista
function printList(head: Node | null): void {
    let current = head;
    let output = '';
    while (current !== null) {
        output += current.data + ' ';//Coloca o dado do nó na string
        current = current.next;//Vai pro próximo nó
    }
    console.log(output.trim());//Exibe a lista toda
}

//Função pra processar o input vindo do arquivo
function processInput(input: string): void {
    const lines = input.trim().split('\n');//Separando o arquivo em linhas
    const initialValues = lines[0].split(' ').map(Number);//Pega os números iniciais
    let head: Node | null = null;

    //Monta a lista encadeada com os valores iniciais, sem complicação
    for (let val of initialValues) {
        const newNode = new Node(val);
        if (head === null) {
            head = newNode;//Se não tem cabeça, o novo nó vira a cabeça
        } else {
            let temp = head;
            while (temp.next !== null) {
                temp = temp.next;//Vai até o final da lista
            }
            temp.next = newNode;//Coloca o novo nó no final
        }
    }

    const opCount = parseInt(lines[1]);//Número de operações que vão rolar

    //Processa as operações
    for (let i = 0; i < opCount; i++) {
        const parts = lines[i + 2].split(' ');
        const op = parts[0];//Pode ser 'A', 'R' ou 'P'

        if (op === 'A') {//Pra adicionar
            const value = parseInt(parts[1]);
            const pos = parseInt(parts[2]);
            head = insertAtPosition(head, value, pos);//Chama a função de inserção
        } else if (op === 'R') {//Pra remover
            const value = parseInt(parts[1]);
            head = removeValue(head, value);//Chama a função de remoção
        } else if (op === 'P') {//Pra imprimir
            //printList(head);//Exibe a lista
        }
    }
}

//Lê o arquivo "arq.txt" e manda o conteúdo pra função processInput, sacou?
fs.readFile('arq-novo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Deu ruim lendo o arquivo:", err);
        return;
    }
    processInput(data);//Processa o conteúdo do arquivo
});


const end = performance.now();
console.log(`Tempo de execução: ${end - start} ms`);