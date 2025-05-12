import time
from typing import Optional

start_time = time.time()

class Node:
    def __init__(self, data: int):
        self.data: int = data
        self.next: Optional[Node] = None

def insert_at_position(head: Optional[Node], data: int, pos: int) -> Optional[Node]:
    new_node = Node(data)

    if pos == 1 or head is None:
        new_node.next = head
        return new_node

    current = head
    count = 1
    while current and count < pos - 1:
        current = current.next
        count += 1

    if current is None:
        current = head
        while current.next:
            current = current.next
        current.next = new_node
    else:
        new_node.next = current.next
        current.next = new_node

    return head

def remove_value(head: Optional[Node], value: int) -> Optional[Node]:
    if head is None:
        return head

    if head.data == value:
        temp = head
        head = head.next
        temp.next = None
        return head

    current = head
    while current.next:
        if current.next.data == value:
            temp = current.next
            current.next = current.next.next
            temp.next = None
            break
        current = current.next

    return head

def print_list(head: Optional[Node]) -> None:
    current = head
    output = []
    while current:
        output.append(str(current.data))
        current = current.next
    print(" ".join(output))

def process_input(input: str) -> None:
    lines = input.strip().split('\n')
    initial_values = list(map(int, lines[0].split()))
    head: Optional[Node] = None

    for val in initial_values:
        new_node = Node(val)
        if head is None:
            head = new_node
        else:
            temp = head
            while temp.next:
                temp = temp.next
            temp.next = new_node

    op_count = int(lines[1])

    for i in range(op_count):
        parts = lines[i + 2].split()
        op = parts[0]

        if op == 'A':
            value = int(parts[1])
            pos = int(parts[2])
            head = insert_at_position(head, value, pos)
        elif op == 'R':
            value = int(parts[1])
            head = remove_value(head, value)
        elif op == 'P':
            print_list(head)

with open('arq-novo.txt', 'r') as file:
    data = file.read()
    process_input(data)

end_time = time.time()
print(f"Tempo de execução: {end_time - start_time:.4f} segundos")
