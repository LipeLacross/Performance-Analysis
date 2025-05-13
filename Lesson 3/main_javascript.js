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
    return data.split('\n').map(num => parseInt(num.trim()));
}

// Função para escrever no arquivo
function writeFile(arr) {
    const data = arr.join('\n');
    fs.writeFileSync('arq-saida.txt', data);
}

// Medição de desempenho
function main() {
    console.log("JavaScript Version: v16.13.1");
    console.log("System Info: Windows 11");
    console.log("Machine: AMD64");
    console.log("RAM: 16 GB");
    console.log("Laptop: Nitro 5 AN515-54-58CL");
    console.log("Processor: Intel Core i5-9300H");
    console.log("Graphics: NVIDIA GeForce GTX 1650");

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

        // Selection Sort
        arrCopy = [...arr];  // Copia o array novamente para não sobrescrever os dados
        let { timeTaken: timeSelection, memoryUsed: memorySelection } = measurePerformance(selectionSort, arrCopy);
        selectionTimes.push(timeSelection);
        selectionMemories.push(memorySelection);
    }

    // Calcular média e mediana
    const avgBubbleTime = bubbleTimes.reduce((a, b) => a + b, 0) / bubbleTimes.length;
    const medianBubbleTime = bubbleTimes.sort()[Math.floor(bubbleTimes.length / 2)];
    const avgBubbleMemory = bubbleMemories.reduce((a, b) => a + b, 0) / bubbleMemories.length;
    const medianBubbleMemory = bubbleMemories.sort()[Math.floor(bubbleMemories.length / 2)];

    const avgSelectionTime = selectionTimes.reduce((a, b) => a + b, 0) / selectionTimes.length;
    const medianSelectionTime = selectionTimes.sort()[Math.floor(selectionTimes.length / 2)];
    const avgSelectionMemory = selectionMemories.reduce((a, b) => a + b, 0) / selectionMemories.length;
    const medianSelectionMemory = selectionMemories.sort()[Math.floor(selectionMemories.length / 2)];

    // Imprimir resultados
    console.log(`Bubble Sort - Média Tempo: ${avgBubbleTime.toFixed(2)} ms, Mediana Tempo: ${medianBubbleTime.toFixed(2)} ms`);
    console.log(`Selection Sort - Média Tempo: ${avgSelectionTime.toFixed(2)} ms, Mediana Tempo: ${medianSelectionTime.toFixed(2)} ms`);
    console.log(`Bubble Sort - Média Memória: ${avgBubbleMemory.toFixed(2)} KB, Mediana Memória: ${medianBubbleMemory.toFixed(2)} KB`);
    console.log(`Selection Sort - Média Memória: ${avgSelectionMemory.toFixed(2)} KB, Mediana Memória: ${medianSelectionMemory.toFixed(2)} KB`);

    // Escrever os resultados no arquivo de saída
    writeFile(bubbleMemories);  // Agora gravando o resultado de bubbleMemories ou qualquer outro
}

main();
