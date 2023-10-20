first = int(input())
second = int(input())

seconds = [second % 10, (second // 10) % 10, second // 100]

for i in seconds:
    print(i * first)
print(first * second)