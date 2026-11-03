x = 3.141592
print(int(x))

a = 17 // 4
b = 17 % 4
print(a, b)    #A는 몫, B는 나머지

a = int(input("숫자 입력: "))
b = 200
print(a + b)

print ('python' , ' java',  sep = '-', end = '!!')
print ('C++')

score = 85
if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
else:
    print('F')

total = 0
for i in range(1, 6):
    if i % 2 == 0:
        continue
        total += i
print(total)

s = "pythonprogramming"
s = s.upper()
print(s[2:9])

data = [10,20,30]
data.append(40)        #40 추가하기
data.insert(1, 500)     #1번 자리에 50010 넣기
data.pop()             #맨 마지막 자리 없애기
print(data)


students = {'name':'홍길동', 'age':20}
print(students.get('major', '컴퓨터공학과'))  #major라는 key가 없으면 '컴퓨터공학과' 출력

count = 0
n = 10
while n > 0:
    if n % 3 == 0:
        count += 1
    if n == 4:
        break
    n -= 1
print(count)   

x = 10
result = 'pass' if x >= 10 and x % 2 == 1 else 'fail'
print(result)

text = ' python programming '
result = text.strip().upper().replace('PYTHON', 'AI')
print(result)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = [x*2 for x in numbers if x % 2 == 0]
print(even_squares)

def func(*args, **kwargs):
    return len(args) + len(kwargs)
print(func(1, 2, 3, a=4, b=5))  # Output: 5

g_var = 10
def update_var():
    global g_var
    g_var += 5
    return g_var
update_var()
print(g_var)  # Output: 15

import copy
a = [[1, 2], [3, 4]]
b = a.copy()  # Shallow copy
b[0][0] = 99
print(a[0][0], b[0][0])  # Output: 99 99