count = int(input())

words = []
for _ in range(count):
    words.append(input().split())

for i in words:
    word1, word2 = i
    if sorted(word1) == sorted(word2):
        print(f"{word1} & {word2} are anagrams.")
    else:
        print(f"{word1} & {word2} are NOT anagrams.")