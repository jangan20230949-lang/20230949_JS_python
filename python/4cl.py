##import turtle

##t = turtle.Turtle()

##t.speed(1)
##t.pensize(3)
##t.pencolor("blue")


##t.shape("arrow")
##t.forward(100)
##t.right(90)
##t.forward(100)
##t.right(90)
##t.forward(100)

##turtle.done()

##print("안녕하세요")

##print("100")
##print("%d" % 100)

##print("100 + 100")
##print("%d" % (100 + 100))

##print("%d" % (100))
##print("%d %d" % (100, 200))

print("%s / %d = %d" % (100, 200, 0.5))

print("%d" % (123))
print("%5d" % (123)) ## 5자리 수로 출력
print("%05d" % (123)) ## 5자리 수로 출력, 빈자리는 0으로 채움

print("%f" % (123.45))
print("%7.1f" % (123.45))
print("%7.3f" % (123.45)) 

print("%s" % ("python"))
print("%10s" % ("python"))



print("한 행입니다 또 한 행입니다")
print("한 행입니다\n또 한 행입니다")

n = 5

for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))

for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "*" * (2 * i - 1))
