T = int(input())
dp = [0] * 101
dp[1] = 1
dp[2] = 1
dp[3] = 1

for i in range(1,98):
    dp[i+3]=dp[i]+dp[i+1]

for i in range(T):
    print(dp[int(input())])