scores = []

for i in range(5):
    score = [int(i) for i in input().split()]
    scores.append(sum(score))

max_score = max(scores)
max_score_index = scores.index(max_score) + 1

print(max_score_index, max_score)