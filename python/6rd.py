#for _ in range(1,100,2):
 #   print("%d"% _, end=' ')


#for i in range(2,100,2):
 #   print("%d"% i, end=' ')

    
#hap = 0

#for i in range(1,100,2):
 #   hap = hap + i
#print("\n1에서 100까지의 홀수의 합계: %d" % hap)


#hap1 = 0

#for i in range(2,100,2):
 #   hap1 = hap1 + i
#print("2에서 100까지의 짝수의 합계: %d" % hap1)

#i, dan = 0, 0
#dan = int(input("출력할 단을 입력하세요 : "))
#for i in range(1,10,1):
 #   print("%d X %d = %2d" % (dan, i, dan*i))

#    for i in range(0,3,1):
 #       for j in range(0,2,1):
  #          print("파이썬 절겁습니다 (i값: %d, j값: %d)" % (i, j))

# for k in range(1, 10): 
#     for i in range(2, 10):
#         print("%d X %d = %2d" % (i, k, i * k), end="\t")
#     print()
# print()    

# for k in range(9, 0, -1): 
#     for i in range(9, 1, -1):
#         print("%d X %d = %2d" % (i, k, i * k), end="\t")
#     print()

# # i, hap = 0, 0
# i = 1

# while i<11:
#     hap = hap + i
#     i = i + 1
# print("1에서 10까지의 합계: %d" % hap)

# while True:
#     print("무한루프입니다. 종료하려면 Ctrl+C를 누르세요.")

# hap = 0
# a, b = 0, 0

# while True:
#     a = int(input("더 할 첫번째 수 입력 : "))
#     if a == 0 :
#         break
#     b = int(input("더 할 두번째 수 입력 : "))
#     hap = a + b
#     print("%d + %d = %d" % (a, b, hap))

# print("0을 기입해서 탈출했습니다")      

# i, hap = 0, 0

# for i in range(1, 101):
#     if i % 3 == 0:
#         continue
#     hap += i

# print("1에서 100까지의 3의 배수를 제외한 수의 합계: %d" % hap)


count = 0

for i in range(1, 51):
    for j in range(i):
        print("*", end=" ")
        count += 1
    
    print()

print()

n = 51


for i in range(n, 0, -2):
    print(" " * ((n - i) // 2) + "*" * i)

for i in range(3, n + 1, 2):
    print(" " * ((n - i) // 2) + "*" * i)