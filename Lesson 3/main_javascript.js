const fs = require('fs');
const { memoryUsage } = require('process');

// Função Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Função Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
}

// Função para medir tempo e memória
function measurePerformance(sortFunction, arr) {
    const startTime = process.hrtime(); // Usa hrtime para alta precisão
    const memoryBefore = memoryUsage().rss;
    sortFunction(arr);
    const memoryAfter = memoryUsage().rss;
    const endTime = process.hrtime(startTime); // Calcula o tempo em [segundos, nanosegundos]

    const timeTaken = (endTime[0] * 1000) + (endTime[1] / 1000000);  // Tempo em milissegundos
    const memoryUsed = (memoryAfter - memoryBefore) / 1024;  // Memória usada em KB
    return { timeTaken, memoryUsed };
}

// Função para ler o arquivo
function readFile() {
    const data = fs.readFileSync('arq.txt', 'utf-8');
    return data.split('\n').map(num => parseInt(num.trim())).filter(num => !isNaN(num)); // Filtra linhas vazias ou não numéricas
}

// Função para escrever no arquivo
function writeFile(arr, filename) {
    const data = arr.join('\n');
    fs.writeFileSync(filename, data); // Grava os números ordenados no arquivo
}

// Medição de desempenho
function main() {
    console.log("javascript version: v16.13.1");
    console.log("system info: windows 11");
    console.log("machine: amd64");
    console.log("ram: 16 gb");
    console.log("laptop: nitro 5 an515-54-58cl");
    console.log("processor: intel core i5-9300h");
    console.log("graphics: nvidia geforce gtx 1650");

    const bubbleTimes = [];
    const bubbleMemories = [];
    const selectionTimes = [];
    const selectionMemories = [];

    for (let i = 0; i < 10; i++) {
        let arr = readFile();

        // Bubble Sort
        let arrCopy = [...arr];
        let { timeTaken: timeBubble, memoryUsed: memoryBubble } = measurePerformance(bubbleSort, arrCopy);
        bubbleTimes.push(timeBubble);
        bubbleMemories.push(memoryBubble);

        // Grava o arquivo para Bubble Sort
        writeFile(arrCopy, 'arq-saida-bubble-javascript.txt');

        // Selection Sort
        arrCopy = [...arr];  // Copia o array novamente para não sobrescrever os dados
        let { timeTaken: timeSelection, memoryUsed: memorySelection } = measurePerformance(selectionSort, arrCopy);
        selectionTimes.push(timeSelection);
        selectionMemories.push(memorySelection);

        // Grava o arquivo para Selection Sort
        writeFile(arrCopy, 'arq-saida-selection-javascript.txt');

        // Imprimir resultados das iterações
        console.log(`Rodada ${i + 1}:`);
        console.log(`Bubble Sort - Tempo: ${timeBubble.toFixed(2)} ms, Memória: ${memoryBubble.toFixed(2)} KB`);
        console.log(`Selection Sort - Tempo: ${timeSelection.toFixed(2)} ms, Memória: ${memorySelection.toFixed(2)} KB`);
    }

    // Calcular média e mediana
    const avgBubbleTime = bubbleTimes.reduce((a, b) => a + b, 0) / bubbleTimes.length;
    const medianBubbleTime = bubbleTimes.sort((a, b) => a - b)[Math.floor(bubbleTimes.length / 2)];
    const avgBubbleMemory = bubbleMemories.reduce((a, b) => a + b, 0) / bubbleMemories.length;
    const medianBubbleMemory = bubbleMemories.sort((a, b) => a - b)[Math.floor(bubbleMemories.length / 2)];

    const avgSelectionTime = selectionTimes.reduce((a, b) => a + b, 0) / selectionTimes.length;
    const medianSelectionTime = selectionTimes.sort((a, b) => a - b)[Math.floor(selectionTimes.length / 2)];
    const avgSelectionMemory = selectionMemories.reduce((a, b) => a + b, 0) / selectionMemories.length;
    const medianSelectionMemory = selectionMemories.sort((a, b) => a - b)[Math.floor(selectionMemories.length / 2)];

    // Imprimir resultados finais
    console.log(`\nBubble Sort - Média Tempo: ${avgBubbleTime.toFixed(2)} ms, Mediana Tempo: ${medianBubbleTime.toFixed(2)} ms`);
    console.log(`Selection Sort - Média Tempo: ${avgSelectionTime.toFixed(2)} ms, Mediana Tempo: ${medianSelectionTime.toFixed(2)} ms`);
    console.log(`Bubble Sort - Média Memória: ${avgBubbleMemory.toFixed(2)} KB, Mediana Memória: ${medianBubbleMemory.toFixed(2)} KB`);
    console.log(`Selection Sort - Média Memória: ${avgSelectionMemory.toFixed(2)} KB, Mediana Memória: ${medianSelectionMemory.toFixed(2)} KB`);
}

main();
