nums = [int(input()) for i in range(9)]

max_num = nums[0]
index = 0 + 1

for i in range(len(nums)):
    if max_num < nums[i]:
        max_num = nums[i]
        index = i + 1

print(max_num)
print(index)