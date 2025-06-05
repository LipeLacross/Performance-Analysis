const fs = require('fs');
const { performance } = require('perf_hooks');

// Algoritmos corrigidos
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca eficiente
            }
        }
    }
}

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]; // Troca eficiente
    }
}

// Medição de performance otimizada
function measurePerformance(sortFunction, originalArray) {
    const arr = [...originalArray]; // Cria cópia real
    const startMemory = process.memoryUsage().heapUsed;
    const startTime = performance.now();

    sortFunction(arr); // Ordena a cópia

    const endTime = performance.now();
    const endMemory = process.memoryUsage().heapUsed;

    return {
        time: endTime - startTime,
        memory: Math.max(0, endMemory - startMemory) / 1024 // KB, nunca negativo
    };
}

// Leitura do arquivo (mantido)
function readFile() {
    try {
        return fs.readFileSync('Lesson 5(Challenge 1)/arq.txt', 'utf-8')
            .split('\n')
            .filter(line => line.trim() !== '')
            .map(Number);
    } catch (e) {
        console.error("Erro ao ler arquivo!");
        process.exit(1);
    }
}
// Função principal otimizada
function main() {
    const originalArray = readFile();
    const results = {
        bubble: { times: [], memories: [] },
        selection: { times: [], memories: [] }
    };

    for (let i = 0; i < 10; i++) {
        // Bubble Sort
        const bubbleResult = measurePerformance(bubbleSort, originalArray);
        results.bubble.times.push(bubbleResult.time);  // Corrigido
        results.bubble.memories.push(bubbleResult.memory);

        // Selection Sort
        const selectionResult = measurePerformance(selectionSort, originalArray);
        results.selection.times.push(selectionResult.time);  // Corrigido
        results.selection.memories.push(selectionResult.memory);

        console.log(`Rodada ${i + 1}:`);
        console.log(`Bubble: ${bubbleResult.time.toFixed(2)}ms | ${bubbleResult.memory.toFixed(2)}KB`);
        console.log(`Selection: ${selectionResult.time.toFixed(2)}ms | ${selectionResult.memory.toFixed(2)}KB`);
    }



    // Exibir estatísticas finais
    const calculateStats = (arr) => ({
        avg: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr)
    });

    console.log("\nResultados Finais:");
    console.log("Bubble Sort -", calculateStats(results.bubble.times));
    console.log("Selection Sort -", calculateStats(results.selection.times));
}

main();
