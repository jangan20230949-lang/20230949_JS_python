# aa = [0,0,0,0,0]
# hap = 0

# aa[0] = int(input("1번째 숫자: "))
# aa[1] = int(input("2번째 숫자: "))
# aa[2] = int(input("3번째 숫자: "))
# aa[3] = int(input("4번째 숫자: "))
# aa[4] = int(input("5번째 숫자: "))

# hap = aa[0] + aa[1] + aa[2] + aa[3] + aa[4]

# print("합계 ==> %d" % hap)


# aa = []
# for i in range(0, 10):
#     aa.append(0)
# hap = 0

# for i in range(0, 10):
#     aa[i] = int(input(str(i + 1) + "번째 숫자: "))


# hap = aa[0] + aa[1] + aa[2] + aa[3] + aa[4] + aa[5] + aa[6] + aa[7] + aa[8] + aa[9]

# print("합계 ==> %d" % hap)

# aa=[]
# bb=[]
# value = 0

# for i in range(0, 200):
#     aa.append(value)
#     value += 3

# for i in range(0, 200):
#     bb.append(aa[199 - i])


# print("bb[0]에는 %d이, bb[99]에는 %d이 입력됩니다." % (bb[0], bb[99]))

# list1 = []
# list2 = []
# value = 0

# for i in range(0, 4):
#     for k in range(0, 5):
#      list1.append(value)
#      value += 3
#     list2.append(list1)
#     list1 = []

# for i in range(0, 4):
#     for k in range(0, 5):
#         print("%d" % list2[i][k], end=" ")
#     print("")

# ss = "Hello, World!"
# print(ss.upper())
# print(ss.lower())
# print(ss.swapcase())
# print(ss.title())

instr = "<<파>><이><<썬>>"
outstr = ""
for i in range(0, len(instr)):
    if instr[i] != "<" and instr[i] != ">":
        outstr += instr[i]

print("%s" % instr)
print(outstr)