const fs = require('fs');
const { memoryUsage } = require('process');

// função bubble sort
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

// função selection sort
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

// função pra medir tempo e memória
function measurePerformance(sortFunction, arr) {
    const startTime = process.hrtime(); // usa hrtime pra precisão
    const memoryBefore = memoryUsage().rss;
    sortFunction(arr);
    const memoryAfter = memoryUsage().rss;
    const endTime = process.hrtime(startTime); // calcula o tempo em [segundos, nanosegundos]

    const timeTaken = (endTime[0] * 1000) + (endTime[1] / 1000000);  // tempo em milissegundos
    const memoryUsed = (memoryAfter - memoryBefore) / 1024;  // memória usada em KB
    return { timeTaken, memoryUsed };
}

// função pra ler o arquivo
function readFile() {
    const data = fs.readFileSync('arq.txt', 'utf-8');
    return data.split('\n').map(num => parseInt(num.trim())).filter(num => !isNaN(num)); // filtra linhas vazias ou não numéricas
}

// função pra escrever no arquivo
function writeFile(arr, filename) {
    const data = arr.join('\n');
    fs.writeFileSync(filename, data); // grava os números ordenados no arquivo
}

// medição de desempenho
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

        // bubble sort
        let arrCopy = [...arr];
        let { timeTaken: timeBubble, memoryUsed: memoryBubble } = measurePerformance(bubbleSort, arrCopy);
        bubbleTimes.push(timeBubble);
        bubbleMemories.push(memoryBubble);

        // grava o arquivo pra bubble sort
        writeFile(arrCopy, 'arq-saida-bubble-javascript.txt');

        // selection sort
        arrCopy = [...arr];  // copia o array de novo pra não sobrescrever os dados
        let { timeTaken: timeSelection, memoryUsed: memorySelection } = measurePerformance(selectionSort, arrCopy);
        selectionTimes.push(timeSelection);
        selectionMemories.push(memorySelection);

        // grava o arquivo pra selection sort
        writeFile(arrCopy, 'arq-saida-selection-javascript.txt');

        // imprimir resultados das iterações
        console.log(`rodada ${i + 1}:`);
        console.log(`bubble sort - tempo: ${timeBubble.toFixed(2)} ms, memória: ${memoryBubble.toFixed(2)} KB`);
        console.log(`selection sort - tempo: ${timeSelection.toFixed(2)} ms, memória: ${memorySelection.toFixed(2)} KB`);
    }

    // calcular média e mediana
    const avgBubbleTime = bubbleTimes.reduce((a, b) => a + b, 0) / bubbleTimes.length;
    const medianBubbleTime = bubbleTimes.sort((a, b) => a - b)[Math.floor(bubbleTimes.length / 2)];
    const avgBubbleMemory = bubbleMemories.reduce((a, b) => a + b, 0) / bubbleMemories.length;
    const medianBubbleMemory = bubbleMemories.sort((a, b) => a - b)[Math.floor(bubbleMemories.length / 2)];

    const avgSelectionTime = selectionTimes.reduce((a, b) => a + b, 0) / selectionTimes.length;
    const medianSelectionTime = selectionTimes.sort((a, b) => a - b)[Math.floor(selectionTimes.length / 2)];
    const avgSelectionMemory = selectionMemories.reduce((a, b) => a + b, 0) / selectionMemories.length;
    const medianSelectionMemory = selectionMemories.sort((a, b) => a - b)[Math.floor(selectionMemories.length / 2)];

    // imprimir resultados finais
    console.log(`\nbubble sort - média tempo: ${avgBubbleTime.toFixed(2)} ms, mediana tempo: ${medianBubbleTime.toFixed(2)} ms`);
    console.log(`selection sort - média tempo: ${avgSelectionTime.toFixed(2)} ms, mediana tempo: ${medianSelectionTime.toFixed(2)} ms`);
    console.log(`bubble sort - média memória: ${avgBubbleMemory.toFixed(2)} KB, mediana memória: ${medianBubbleMemory.toFixed(2)} KB`);
    console.log(`selection sort - média memória: ${avgSelectionMemory.toFixed(2)} KB, mediana memória: ${medianSelectionMemory.toFixed(2)} KB`);
}

main();
