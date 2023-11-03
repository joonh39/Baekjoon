import sys

n, m = [int(i) for i in sys.stdin.readline().split()]
pay = [int(i) for i in sys.stdin.readline().split()]

window = sum(pay[:m])
result = window

for i in range(m, n):
    window += pay[i] - pay[i - m]
    result = max(result, window)
print(result)