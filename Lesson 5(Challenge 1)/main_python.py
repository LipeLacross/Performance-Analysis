import time
import tracemalloc
import gc


def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break


def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]


def measure_performance(sort_function, original_arr):
    gc.collect()
    arr = original_arr.copy()  # Cópia fora da medição

    tracemalloc.start()
    baseline = tracemalloc.get_traced_memory()[1]

    start_time = time.perf_counter()
    sort_function(arr)
    end_time = time.perf_counter()

    peak = tracemalloc.get_traced_memory()[1]
    tracemalloc.stop()

    time_ms = (end_time - start_time) * 1000
    memory_kb = (peak - baseline) / 1024  # Memória usada durante a ordenação

    return time_ms, max(0, memory_kb)


def read_file():
    try:
        with open('arq.txt', 'r') as f:
            return [int(line.strip()) for line in f if line.strip().isdigit()]
    except FileNotFoundError:
        print("Erro: arquivo 'arq.txt' não encontrado")
        exit()


def main():
    original = read_file()

    bubble_times, bubble_memories = [], []
    selection_times, selection_memories = [], []

    for i in range(10):
        # Cria nova cópia para cada teste
        arr_copy = original.copy()

        # Bubble Sort
        time_bubble, memory_bubble = measure_performance(bubble_sort, arr_copy)
        bubble_times.append(time_bubble)
        bubble_memories.append(memory_bubble)

        # Nova cópia para Selection Sort
        arr_copy = original.copy()

        # Selection Sort
        time_selection, memory_selection = measure_performance(selection_sort, arr_copy)
        selection_times.append(time_selection)
        selection_memories.append(memory_selection)

        print(f"Rodada {i + 1}:")
        print(f"Bubble: {time_bubble:.2f} ms | Mem: {memory_bubble:.2f} KB")
        print(f"Selection: {time_selection:.2f} ms | Mem: {memory_selection:.2f} KB")

    def calc_stats(arr):
        return {
            'avg': sum(arr) / len(arr),
            'min': min(arr),
            'max': max(arr)
        }

    print("\nResultados Finais:")
    print("Bubble Sort - Tempo (ms):", calc_stats(bubble_times))
    print("Bubble Sort - Memória (KB):", calc_stats(bubble_memories))
    print("Selection Sort - Tempo (ms):", calc_stats(selection_times))
    print("Selection Sort - Memória (KB):", calc_stats(selection_memories))


if __name__ == "__main__":
    main()
