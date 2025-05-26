import time
import psutil  # biblioteca para obter informações do sistema, como uso de memória

#função de ordenação Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            # troca os elementos se estiverem fora de ordem
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

#função de ordenação Selection Sort
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i  # assume que o menor elemento está na posição atual
        for j in range(i+1, n):
            # encontra o menor elemento no restante da lista
            if arr[j] < arr[min_idx]:
                min_idx = j
        # troca o menor elemento encontrado com o da posição atual
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

#mede o tempo de execução e o consumo de memória de uma função de ordenação
def measure_performance(sort_function, arr):
    process = psutil.Process()

    # mede a memória antes da execução (em KB)
    memory_before = process.memory_info().rss / 1024

    # mede o tempo de início da execução
    start_time = time.perf_counter()
    sort_function(arr)  # executa a função de ordenação
    end_time = time.perf_counter()

    # mede a memória após a execução (em KB)
    memory_after = process.memory_info().rss / 1024

    # calcula o tempo decorrido em milissegundos
    time_taken = (end_time - start_time) * 1000
    # calcula a diferença de memória utilizada
    memory_used = memory_after - memory_before

    return time_taken, memory_used

#lê os números inteiros de um arquivo texto (um por linha)
def read_file():
    with open('arq.txt', 'r') as file:
        return [int(line.strip()) for line in file.readlines()]

#escreve os números ordenados em um arquivo
def write_file(arr, filename):
    with open(filename, 'w') as file:
        for num in arr:
            file.write(f"{num}\n")

#informações sobre o sistema onde o código está sendo executado
def print_system_info():
    print("python version: 3.13.3")
    print("system info: windows 11")
    print("machine: amd64")
    print("ram: 16 gb")
    print("laptop: nitro 5 an515-54-58cl")
    print("processor: intel core i5-9300h")
    print("graphics: nvidia geforce gtx 1650")

#função principal que executa os testes de desempenho
def main():
    print_system_info()

    bubble_times = []      # lista de tempos do Bubble Sort
    bubble_memories = []   # lista de memórias do Bubble Sort
    selection_times = []   # lista de tempos do Selection Sort
    selection_memories = []  # lista de memórias do Selection Sort

    #realiza 10 rodadas de testes
    for i in range(10):
        arr = read_file()  # lê os dados do arquivo

        #executa e mede o desempenho do Bubble Sort
        arr_copy = arr.copy()
        time_bubble, memory_bubble = measure_performance(bubble_sort, arr_copy)
        bubble_times.append(time_bubble)
        bubble_memories.append(memory_bubble)
        write_file(arr_copy, 'arq-saida-bubble-python.txt')  # salva resultado

        #executa e mede o desempenho do Selection Sort
        arr_copy = arr.copy()
        time_selection, memory_selection = measure_performance(selection_sort, arr_copy)
        selection_times.append(time_selection)
        selection_memories.append(memory_selection)
        write_file(arr_copy, 'arq-saida-selection-python.txt')  # salva resultado

        #exibe os resultados de cada rodada
        print(f"Rodada {i + 1}:")
        print(f"Bubble Sort - Tempo: {time_bubble:.2f} ms, Memória: {memory_bubble:.2f} KB")
        print(f"Selection Sort - Tempo: {time_selection:.2f} ms, Memória: {memory_selection:.2f} KB")

    #calcula médias e medianas dos tempos e memórias
    avg_bubble_time = sum(bubble_times) / len(bubble_times)
    median_bubble_time = sorted(bubble_times)[len(bubble_times) // 2]
    avg_bubble_memory = sum(bubble_memories) / len(bubble_memories)
    median_bubble_memory = sorted(bubble_memories)[len(bubble_memories) // 2]

    avg_selection_time = sum(selection_times) / len(selection_times)
    median_selection_time = sorted(selection_times)[len(selection_times) // 2]
    avg_selection_memory = sum(selection_memories) / len(selection_memories)
    median_selection_memory = sorted(selection_memories)[len(selection_memories) // 2]

    #exibe os resultados finais (média e mediana)
    print(f"\nBubble Sort - Média Tempo: {avg_bubble_time:.2f} ms, Mediana Tempo: {median_bubble_time:.2f} ms")
    print(f"Selection Sort - Média Tempo: {avg_selection_time:.2f} ms, Mediana Tempo: {median_selection_time:.2f} ms")
    print(f"Bubble Sort - Média Memória: {avg_bubble_memory:.2f} KB, Mediana Memória: {median_bubble_memory:.2f} KB")
    print(f"Selection Sort - Média Memória: {avg_selection_memory:.2f} KB, Mediana Memória: {median_selection_memory:.2f} KB")

if __name__ == "__main__":
    main()
