import time
import tracemalloc

# Função Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Função Selection Sort
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# Função para medir tempo e memória
def measure_performance(sort_function, arr):
    # Iniciar o rastreamento de memória
    tracemalloc.start()

    start_time = time.perf_counter()  # Usar perf_counter para maior precisão
    sort_function(arr)
    end_time = time.perf_counter()

    # Medir a memória atual após a execução
    current, peak = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    time_taken = (end_time - start_time) * 1000  # Tempo em milissegundos
    memory_used = peak / 1024  # Memória usada em KB (usando o valor de pico)

    return time_taken, memory_used

# Função para ler o arquivo
def read_file():
    with open('arq.txt', 'r') as file:
        return [int(line.strip()) for line in file.readlines()]

# Função para escrever no arquivo
def write_file(arr):
    with open('arq-saida.txt', 'w') as file:
        for num in arr:
            file.write(f"{num}\n")

# Informações sobre o sistema
def print_system_info():
    print("Python Version: 3.13.3")
    print("System Info: Windows 11")
    print("Machine: AMD64")
    print("RAM: 16 GB")
    print("Laptop: Nitro 5 AN515-54-58CL")
    print("Processor: Intel Core i5-9300H")
    print("Graphics: NVIDIA GeForce GTX 1650")

# Medição de desempenho
def main():
    print_system_info()

    bubble_times = []
    bubble_memories = []
    selection_times = []
    selection_memories = []

    for _ in range(10):
        arr = read_file()

        # Bubble Sort
        arr_copy = arr.copy()
        time_bubble, memory_bubble = measure_performance(bubble_sort, arr_copy)
        bubble_times.append(time_bubble)
        bubble_memories.append(memory_bubble)

        # Selection Sort
        arr_copy = arr.copy()
        time_selection, memory_selection = measure_performance(selection_sort, arr_copy)
        selection_times.append(time_selection)
        selection_memories.append(memory_selection)

    # Calcular média e mediana
    avg_bubble_time = sum(bubble_times) / len(bubble_times)
    median_bubble_time = sorted(bubble_times)[len(bubble_times) // 2]
    avg_bubble_memory = sum(bubble_memories) / len(bubble_memories)
    median_bubble_memory = sorted(bubble_memories)[len(bubble_memories) // 2]

    avg_selection_time = sum(selection_times) / len(selection_times)
    median_selection_time = sorted(selection_times)[len(selection_times) // 2]
    avg_selection_memory = sum(selection_memories) / len(selection_memories)
    median_selection_memory = sorted(selection_memories)[len(selection_memories) // 2]

    # Imprimir resultados
    print(f"Bubble Sort - Média Tempo: {avg_bubble_time:.2f} ms, Mediana Tempo: {median_bubble_time:.2f} ms")
    print(f"Selection Sort - Média Tempo: {avg_selection_time:.2f} ms, Mediana Tempo: {median_selection_time:.2f} ms")
    print(f"Bubble Sort - Média Memória: {avg_bubble_memory:.2f} KB, Mediana Memória: {median_bubble_memory:.2f} KB")
    print(f"Selection Sort - Média Memória: {avg_selection_memory:.2f} KB, Mediana Memória: {median_selection_memory:.2f} KB")

    # Escrever os resultados no arquivo de saída
    write_file(arr)  # Escreve os números ordenados no arquivo

if __name__ == "__main__":
    main()
