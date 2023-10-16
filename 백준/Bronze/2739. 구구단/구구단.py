num = int(input())
answer = 0
for i in range(1, 9+1):
    answer = num * i
    print(num, '*', i, '=', answer)