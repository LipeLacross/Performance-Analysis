import * as fs from 'fs'; // Traz o fs pra ler o arquivo, beleza?
import { performance } from 'perf_hooks';

// Classe do nó – cada nó é um item na lista encadeada
class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data; // Guarda o valor no nó
        this.next = null; // Próximo zerado
    }
}

// Função pra inserir um nó numa posição específica
function insertAtPosition(head: Node | null, data: number, pos: number): Node | null {
    const newNode = new Node(data);

    if (pos === 1 || head === null) {
        newNode.next = head;
        return newNode;
    }

    let current: Node | null = head;
    let count = 1;
    while (current !== null && count < pos - 1) {
        current = current.next;
        count++;
    }

    if (current === null) {
        current = head;
        while (current!.next !== null) {
            current = current!.next;
        }
        current!.next = newNode;
    } else {
        newNode.next = current.next;
        current.next = newNode;
    }

    return head;
}

// Função pra remover a primeira ocorrência de um valor
function removeValue(head: Node | null, value: number): Node | null {
    if (head === null) return head;

    if (head.data === value) {
        const temp = head;
        head = head.next;
        temp.next = null;
        return head;
    }

    let current = head;
    while (current.next !== null) {
        if (current.next.data === value) {
            const temp = current.next;
            current.next = current.next.next;
            temp.next = null;
            break;
        }
        current = current.next;
    }

    return head;
}

// Função pra imprimir todos os valores da lista
function printList(head: Node | null): void {
    let current = head;
    let output = '';
    while (current !== null) {
        output += current.data + ' ';
        current = current.next;
    }
    console.log(output.trim());
}

// Função pra processar o input vindo do arquivo
function processInput(input: string): void {
    const lines = input.trim().split('\n');
    const initialValues = lines[0].split(' ').map(Number);
    let head: Node | null = null;

    for (let val of initialValues) {
        const newNode = new Node(val);
        if (head === null) {
            head = newNode;
        } else {
            let temp = head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    const opCount = parseInt(lines[1]);

    for (let i = 0; i < opCount; i++) {
        const parts = lines[i + 2].split(' ');
        const op = parts[0];

        if (op === 'A') {
            const value = parseInt(parts[1]);
            const pos = parseInt(parts[2]);
            head = insertAtPosition(head, value, pos);
        } else if (op === 'R') {
            const value = parseInt(parts[1]);
            head = removeValue(head, value);
        } else if (op === 'P') {
            printList(head);
        }
    }
}

// Marca o início da execução
const start = performance.now();

// Lê o arquivo "arq-novo.txt" e processa tudo
fs.readFile('arq-novo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Deu ruim lendo o arquivo:", err);
        return;
    }

    processInput(data);

    // Marca o fim da execução APÓS o processamento
    const end = performance.now();
    console.log(`Tempo de execução: ${(end - start).toFixed(3)} ms`);
});
