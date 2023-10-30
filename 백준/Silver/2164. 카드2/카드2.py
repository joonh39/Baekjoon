import sys
from collections import deque

n = int(sys.stdin.readline())

cards = deque()

for i in range(n):
    cards.append(i + 1)

for _ in range(n):
    if len(cards) == 1:
        print(cards[0])
    else:
        cards.popleft()
        cards.append(cards[0])
        cards.popleft()