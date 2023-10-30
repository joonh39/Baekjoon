import sys

test_case = int(sys.stdin.readline())

for _ in range(test_case):
    clothes_num = int(sys.stdin.readline())
    dict = {}
    for _ in range(clothes_num):
        clothes_name, clothes_type = sys.stdin.readline().split()
        if clothes_type in dict:
            dict[clothes_type].append(clothes_name)
        else:
            dict[clothes_type] = [clothes_name]

    count = 1
    for i in dict:
        count *= len(dict[i]) + 1
    print(count - 1)