import matplotlib.pyplot as plt
import pandas as pd

# Dados fornecidos
data = {
    "Algoritmo": ["BS(Python)", "SS (Python)", "BS(Javascript)", "SS(Javascript)"],
    "Média Tempo (ms)": [56093.70, 25398.44, 6477.41, 946.81],
    "Mediana Tempo (ms)": [55250.73, 24291.18, 6169.36, 897.04],
    "Média Memória (KB)": [-49.60, -8.40, 288.00, -64.80],
    "Mediana Memória (KB)": [0.00, 0.00, -1708.00, 0.00]
}

# Criando o DataFrame
df = pd.DataFrame(data)

# Gráficos
fig, axs = plt.subplots(2, 2, figsize=(14, 10))

# Média Tempo
axs[0, 0].bar(df["Algoritmo"], df["Média Tempo (ms)"], color='skyblue')
axs[0, 0].set_title("Média Tempo (ms)")
axs[0, 0].set_ylabel("Tempo (ms)")

# Mediana Tempo
axs[0, 1].bar(df["Algoritmo"], df["Mediana Tempo (ms)"], color='lightgreen')
axs[0, 1].set_title("Mediana Tempo (ms)")
axs[0, 1].set_ylabel("Tempo (ms)")

# Média Memória
axs[1, 0].bar(df["Algoritmo"], df["Média Memória (KB)"], color='salmon')
axs[1, 0].set_title("Média Memória (KB)")
axs[1, 0].set_ylabel("Memória (KB)")

# Mediana Memória
axs[1, 1].bar(df["Algoritmo"], df["Mediana Memória (KB)"], color='lightcoral')
axs[1, 1].set_title("Mediana Memória (KB)")
axs[1, 1].set_ylabel("Memória (KB)")

# Exibir os gráficos
plt.tight_layout()
plt.show()
