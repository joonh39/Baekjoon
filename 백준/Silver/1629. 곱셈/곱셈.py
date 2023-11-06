import sys

a, b, c = [int(i) for i in sys.stdin.readline().split()]


def power_rest(a, b, c):
    if b == 1:
        return a % c
    else:
        temp = power_rest(a, b // 2, c)
        if b % 2 == 0:
            return temp * temp % c
        else:
            return temp * temp * a % c


print(power_rest(a, b, c))