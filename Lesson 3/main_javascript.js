const fs = require('fs'); // importa o módulo de sistema de arquivos
const { memoryUsage } = require('process'); // importa função pra medir uso de memória

// função bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    // percorre todo o array
    for (let i = 0; i < n; i++) {
        // faz comparação entre pares e empurra o maior pro final
        for (let j = 0; j < n - i - 1; j++) {
            // se o elemento atual for maior que o próximo, troca
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // troca usando destructuring
            }
        }
    }
}

// função selection sort
function selectionSort(arr) {
    const n = arr.length;
    // percorre todo o array
    for (let i = 0; i < n; i++) {
        let minIdx = i; // assume que o menor elemento está na posição atual
        // busca o menor elemento do restante do array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j; // atualiza índice do menor valor
            }
        }
        // troca o menor valor encontrado com o valor atual
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

// função pra medir tempo de execução e memória usada
function measurePerformance(sortFunction, arr) {
    const startTime = process.hrtime(); // marca tempo inicial com alta resolução
    const memoryBefore = memoryUsage().rss; // mede memória antes da ordenação

    sortFunction(arr); // executa a função de ordenação

    const memoryAfter = memoryUsage().rss; // mede memória depois da ordenação
    const endTime = process.hrtime(startTime); // calcula tempo decorrido

    const timeTaken = (endTime[0] * 1000) + (endTime[1] / 1000000); // converte tempo pra milissegundos
    const memoryUsed = (memoryAfter - memoryBefore) / 1024; // calcula memória usada em kilobytes
    return { timeTaken, memoryUsed };
}

// função pra ler o conteúdo do arquivo e transformar em array de números
function readFile() {
    const data = fs.readFileSync('arq.txt', 'utf-8'); // lê arquivo como texto
    return data
        .split('\n') // separa por linha
        .map(num => parseInt(num.trim())) // transforma em número
        .filter(num => !isNaN(num)); // remove valores inválidos
}

// função pra salvar array de números em um arquivo
function writeFile(arr, filename) {
    const data = arr.join('\n'); // junta os números com quebra de linha
    fs.writeFileSync(filename, data); // escreve no arquivo especificado
}

// função principal
function main() {
    // imprime informações do sistema (pra contextualizar o teste)
    console.log("javascript version: v16.13.1");
    console.log("system info: windows 11");
    console.log("machine: amd64");
    console.log("ram: 16 gb");
    console.log("laptop: nitro 5 an515-54-58cl");
    console.log("processor: intel core i5-9300h");
    console.log("graphics: nvidia geforce gtx 1650");

    // arrays pra armazenar resultados das execuções
    const bubbleTimes = [];
    const bubbleMemories = [];
    const selectionTimes = [];
    const selectionMemories = [];

    // repete o teste 10 vezes pra maior precisão estatística
    for (let i = 0; i < 10; i++) {
        let arr = readFile(); // lê os dados do arquivo

        // executa bubble sort
        let arrCopy = [...arr]; // cria cópia pra não alterar o original
        let { timeTaken: timeBubble, memoryUsed: memoryBubble } = measurePerformance(bubbleSort, arrCopy);
        bubbleTimes.push(timeBubble);
        bubbleMemories.push(memoryBubble);
        writeFile(arrCopy, 'arq-saida-bubble-javascript.txt'); // salva resultado ordenado

        // executa selection sort
        arrCopy = [...arr]; // copia novamente o original
        let { timeTaken: timeSelection, memoryUsed: memorySelection } = measurePerformance(selectionSort, arrCopy);
        selectionTimes.push(timeSelection);
        selectionMemories.push(memorySelection);
        writeFile(arrCopy, 'arq-saida-selection-javascript.txt'); // salva resultado ordenado

        // imprime resultados da rodada
        console.log(`rodada ${i + 1}:`);
        console.log(`bubble sort - tempo: ${timeBubble.toFixed(2)} ms, memória: ${memoryBubble.toFixed(2)} KB`);
        console.log(`selection sort - tempo: ${timeSelection.toFixed(2)} ms, memória: ${memorySelection.toFixed(2)} KB`);
    }

    // calcula média e mediana de tempo e memória pro bubble sort
    const avgBubbleTime = bubbleTimes.reduce((a, b) => a + b, 0) / bubbleTimes.length;
    const medianBubbleTime = bubbleTimes.sort((a, b) => a - b)[Math.floor(bubbleTimes.length / 2)];
    const avgBubbleMemory = bubbleMemories.reduce((a, b) => a + b, 0) / bubbleMemories.length;
    const medianBubbleMemory = bubbleMemories.sort((a, b) => a - b)[Math.floor(bubbleMemories.length / 2)];

    // calcula média e mediana de tempo e memória pro selection sort
    const avgSelectionTime = selectionTimes.reduce((a, b) => a + b, 0) / selectionTimes.length;
    const medianSelectionTime = selectionTimes.sort((a, b) => a - b)[Math.floor(selectionTimes.length / 2)];
    const avgSelectionMemory = selectionMemories.reduce((a, b) => a + b, 0) / selectionMemories.length;
    const medianSelectionMemory = selectionMemories.sort((a, b) => a - b)[Math.floor(selectionMemories.length / 2)];

    // imprime os resultados finais
    console.log(`\nbubble sort - média tempo: ${avgBubbleTime.toFixed(2)} ms, mediana tempo: ${medianBubbleTime.toFixed(2)} ms`);
    console.log(`selection sort - média tempo: ${avgSelectionTime.toFixed(2)} ms, mediana tempo: ${medianSelectionTime.toFixed(2)} ms`);
    console.log(`bubble sort - média memória: ${avgBubbleMemory.toFixed(2)} KB, mediana memória: ${medianBubbleMemory.toFixed(2)} KB`);
    console.log(`selection sort - média memória: ${avgSelectionMemory.toFixed(2)} KB, mediana memória: ${medianSelectionMemory.toFixed(2)} KB`);
}

// chama a função principal
main();
