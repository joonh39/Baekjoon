import sys

x, y = [int(i) for i in sys.stdin.readline().split()]

calcs = [x + y, x - y, x * y, x // y, x % y]
for i in calcs:
    print(i)