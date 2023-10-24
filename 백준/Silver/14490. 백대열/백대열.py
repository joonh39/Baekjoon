n, m = input().split(":")

n, m = int(n), int(m)


def gcd(n, m):
    while m > 0:
        n, m = m, n % m
    return n


reduce_n, reduce_m = int(n / gcd(n, m)), int(m / gcd(n, m))
print(f"{reduce_n}:{reduce_m}")