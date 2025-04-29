import time

start_time = time.time()

#Importando a biblioteca pra leitura de arquivos
class Node:
    def __init__(self, data):
        self.data = data  #Guarda o valor no nó
        self.next = None  #Proximo é None por enquanto

#Função pra inserir um nó numa posição específica
def insert_at_position(head, data, pos):
    new_node = Node(data)  #Cria o nó com o valor

    #Se a posição for 1 ou a lista estiver vazia, coloca logo no começo
    if pos == 1 or not head:
        new_node.next = head  #Cabeça agora vai ser o próximo
        return new_node

    current = head
    count = 1
    while current and count < pos - 1:
        current = current.next  #Vai pro próximo nó
        count += 1

    #Se a posição for maior que o tamanho da lista, coloca no final
    if not current:
        current = head
        while current.next:
            current = current.next
        current.next = new_node  #Coloca no final
    else:
        new_node.next = current.next  #Coloca no meio da bagunça
        current.next = new_node  #Atualiza o ponteiro

    return head  #Retorna a lista com a atualização

#Função pra remover a primeira ocorrência de um valor
def remove_value(head, value):
    if not head:
        return head  #Se a lista tá vazia, não tem o que fazer

    #Se o primeiro nó tem o valor, manda ele embora
    if head.data == value:
        temp = head
        head = head.next  #Atualiza a cabeça da lista para o próximo nó
        temp.next = None  #Desvincula o nó removido
        return head

    current = head
    while current.next:
        if current.next.data == value:
            temp = current.next
            current.next = current.next.next  #Remove o nó da lista
            temp.next = None  #Desvincula o nó removido
            break
        current = current.next

    return head  #Retorna a lista atualizada

#Função pra imprimir todos os valores da lista
def print_list(head):
    current = head
    output = ""
    while current:
        output += str(current.data) + " "  #Coloca o dado do nó na string
        current = current.next  #Vai pro próximo nó
    print(output.strip())  #Exibe a lista toda

#Função pra processar o input vindo do arquivo
def process_input(input):
    lines = input.strip().split('\n')  #Separando o arquivo em linhas
    initial_values = list(map(int, lines[0].split()))  #Pega os números iniciais
    head = None

    #Monta a lista encadeada com os valores iniciais
    for val in initial_values:
        new_node = Node(val)
        if not head:
            head = new_node  #Se não tem cabeça, o novo nó vira a cabeça
        else:
            temp = head
            while temp.next:
                temp = temp.next  #Vai até o final da lista
            temp.next = new_node  #Coloca o novo nó no final

    op_count = int(lines[1])  #Número de operações

    #Processa as operações
    for i in range(op_count):
        parts = lines[i + 2].split()
        op = parts[0]  #Pode ser 'A', 'R' ou 'P'

        if op == 'A':  #Pra adicionar
            value = int(parts[1])
            pos = int(parts[2])
            head = insert_at_position(head, value, pos)  #Chama a função de inserção
        elif op == 'R':  #Pra remover
            value = int(parts[1])
            head = remove_value(head, value)  #Chama a função de remoção
        #elif op == 'P':  #Pra imprimir
            #print_list(head)  #Exibe a lista

#Lê o arquivo "arq.txt" e manda o conteúdo pra função process_input, sacou?
with open('arq-novo.txt', 'r') as file:
    data = file.read()
    process_input(data)  #Processa o conteúdo do arquivo


end_time = time.time()
print(f"Tempo de execução: {end_time - start_time} segundos")