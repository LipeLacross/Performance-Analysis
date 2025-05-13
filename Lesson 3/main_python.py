import time
import psutil

# função bubble sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# função selection sort
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# função pra medir tempo e memória
def measure_performance(sort_function, arr):
    process = psutil.Process()

    # medir a memória antes da execução
    memory_before = process.memory_info().rss / 1024  # memória antes (em KB)

    start_time = time.perf_counter()  # usar perf_counter pra maior precisão
    sort_function(arr)
    end_time = time.perf_counter()

    # medir a memória depois da execução
    memory_after = process.memory_info().rss / 1024  # memória depois (em KB)

    time_taken = (end_time - start_time) * 1000  # tempo em milissegundos
    memory_used = memory_after - memory_before  # memória usada (em KB)

    return time_taken, memory_used

# função pra ler o arquivo
def read_file():
    with open('arq.txt', 'r') as file:
        return [int(line.strip()) for line in file.readlines()]

# função pra escrever no arquivo
def write_file(arr, filename):
    with open(filename, 'w') as file:
        for num in arr:
            file.write(f"{num}\n")

# informações sobre o sistema
def print_system_info():
    print("python version: 3.13.3")
    print("system info: windows 11")
    print("machine: amd64")
    print("ram: 16 gb")
    print("laptop: nitro 5 an515-54-58cl")
    print("processor: intel core i5-9300h")
    print("graphics: nvidia geforce gtx 1650")

# medição de desempenho
def main():
    print_system_info()

    bubble_times = []
    bubble_memories = []
    selection_times = []
    selection_memories = []

    # rodar 10 vezes
    for i in range(10):
        arr = read_file()

        # bubble sort
        arr_copy = arr.copy()
        time_bubble, memory_bubble = measure_performance(bubble_sort, arr_copy)
        bubble_times.append(time_bubble)
        bubble_memories.append(memory_bubble)

        # grava o arquivo para bubble sort
        write_file(arr_copy, 'arq-saida-bubble-python.txt')

        # selection sort
        arr_copy = arr.copy()
        time_selection, memory_selection = measure_performance(selection_sort, arr_copy)
        selection_times.append(time_selection)
        selection_memories.append(memory_selection)

        # grava o arquivo para selection sort
        write_file(arr_copy, 'arq-saida-selection-python.txt')

        # imprimir resultados das iterações
        print(f"Rodada {i + 1}:")
        print(f"Bubble Sort - Tempo: {time_bubble:.2f} ms, Memória: {memory_bubble:.2f} KB")
        print(f"Selection Sort - Tempo: {time_selection:.2f} ms, Memória: {memory_selection:.2f} KB")

    # calcular média e mediana
    avg_bubble_time = sum(bubble_times) / len(bubble_times)
    median_bubble_time = sorted(bubble_times)[len(bubble_times) // 2]
    avg_bubble_memory = sum(bubble_memories) / len(bubble_memories)
    median_bubble_memory = sorted(bubble_memories)[len(bubble_memories) // 2]

    avg_selection_time = sum(selection_times) / len(selection_times)
    median_selection_time = sorted(selection_times)[len(selection_times) // 2]
    avg_selection_memory = sum(selection_memories) / len(selection_memories)
    median_selection_memory = sorted(selection_memories)[len(selection_memories) // 2]

    # imprimir resultados finais
    print(f"\nBubble Sort - Média Tempo: {avg_bubble_time:.2f} ms, Mediana Tempo: {median_bubble_time:.2f} ms")
    print(f"Selection Sort - Média Tempo: {avg_selection_time:.2f} ms, Mediana Tempo: {median_selection_time:.2f} ms")
    print(f"Bubble Sort - Média Memória: {avg_bubble_memory:.2f} KB, Mediana Memória: {median_bubble_memory:.2f} KB")
    print(f"Selection Sort - Média Memória: {avg_selection_memory:.2f} KB, Mediana Memória: {median_selection_memory:.2f} KB")

if __name__ == "__main__":
    main()
