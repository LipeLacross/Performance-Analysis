console.time('executionTime');

const fs = require('fs'); // traz o fs pra ler, beleza?

// classe do node – cada nó é um item na lista encadeada
class Node {
    constructor(data) {
        this.data = data; // guarda o valor no nó
        this.next = null; // próximo zerado
    }
}

// função pra inserir um nó numa posição específica
function insertAtPosition(head, data, pos) {
    const newNode = new Node(data); // cria o nó com o valor

    // se a posição for 1 ou a lista tá vazia, bota logo no começo
    if (pos === 1 || head === null) {
        newNode.next = head;
        return newNode;
    }

    // percorre a lista pra achar o lugar certim
    let current = head;
    let count = 1;
    while (current !== null && count < pos - 1) {
        current = current.next;
        count++;
    }

    // se a posição for maior que o tamanho da lista, mete no final
    if (current === null) {
        current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    } else {
        // senão, insere no meio da bagunça
        newNode.next = current.next;
        current.next = newNode;
    }

    return head; // retorna a lista atualizada
}

// função pra remover a primeira ocorrência de um valor
function removeValue(head, value) {
    if (head === null) return head;

    // se o primeiro nó já tem o valor, tira ele
    if (head.data === value) {
        return head.next;
    }

    // percorre a lista procurando o nó com o valor pra remover
    let current = head;
    while (current.next !== null) {
        if (current.next.data === value) {
            current.next = current.next.next;
            break;
        }
        current = current.next;
    }
    return head;
}

// função pra imprimir todos os valores da lista
function printList(head) {
    let current = head;
    let output = "";
    while (current !== null) {
        output += current.data + " ";
        current = current.next;
    }
    console.log(output.trim());
}

// função pra processar o input vindo do arquivo
function processInput(input) {
    const lines = input.trim().split('\n');

    // primeira linha: os números iniciais da lista
    const initialValues = lines[0].split(' ').map(Number);
    let head = null;

    // monta a lista encadeada
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

    // segunda linha: número de operações
    const opCount = parseInt(lines[1]);

    // processa as operações
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

// lê o arquivo e só finaliza o tempo depois
fs.readFile('arq-novo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("deu ruim lendo o arquivo:", err);
        return;
    }
    processInput(data);
    console.timeEnd('executionTime'); // aqui sim é o final da execução real
});
