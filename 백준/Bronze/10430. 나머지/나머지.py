import sys

a, b, c = [int(i) for i in sys.stdin.readline().split()]

results = [(a + b) % c, ((a % c) + (b % c)) % c, (a * b) % c, ((a % c) * (b % c)) % c]
for i in results:
    print(i)