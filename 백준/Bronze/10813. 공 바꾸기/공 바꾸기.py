basket_count, change_count = [int(i) for i in input().split()]

baskets = [i + 1 for i in range(basket_count)]

# for i in range(change_count):
#     start, end = input().split()
#     temp = ""
#     temp = baskets[int(start) - 1]
#     baskets[int(start) - 1] = baskets[int(end) - 1]
#     baskets[int(end) - 1] = temp

for i in range(change_count):
    start, end = [int(i) - 1 for i in input().split()]
    baskets[start], baskets[end] = baskets[end], baskets[start]

print(*baskets)