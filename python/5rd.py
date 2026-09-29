##a = 10
##b = 3

##print("a =", a)
##print("b =", b)

##print("a // b =", a // b)
##print("a % b =", a % b)
##print("a ** b =", a ** b)

# 대입연산자

##a = 10

##print("a =", a)

##a += 5
##print("a += 5 :", a)

##a -= 3
##print("a -= 3 :", a)

##a *= 2
##print("a *= 2 :", a)

##a /= 4
##print("a /= 4 :", a)

## 관계 연산자

##a = 9
##b = 2

##print("a == b :", a == b)

##print("a != b :", a != b)

##print("a > b  :", a > b)

##print("a < b  :", a < b)

##print("a >= b :", a >= b)

##print("a <= b :", a <= b)


##s1,s2,s3 = "100", "100.123", "9999999999999999"
##print(int(s1) + 1, float(s2) + 1, int(s3) + 1)

##a=100
##b=100.123
##str(a) + '1'; str(b) + '1'

## 변수값 선언
##money = 0 
##c500 = 0
##c100 = 0
##c50 = 0

## 메인 코드 파트
##money = int(input("금액을 입력하세요 : "))  ## 동전으로 교환할 돈(money)과 500원, 100원, 50원짜리 동전갯수를 저장 할 변수 초기화

##c500 = money // 500  ## 500원짜리 동전 갯수를 구함
##money %= 500   ## 다시 money를 500원으로 나눈 후 나머지값 저장

##c100 = money // 100
##money %= 100

##c50 = money // 50
##money %= 50


##print("\n 500원짜리 ==> %d개" % c500)
##print("100원짜리 ==> %d개" % c100)
##print("50원짜리 ==> %d개" % c50)
##print("바꾸지 못한 잔돈 ==> %d원 \n" % money)

##money1 = 0 
##c10000 = 0
##c5000 = 0
##c1000 = 0


##money1 = int(input("금액을 입력하세요 : "))  
##c10000 = money1 // 100000  
##money1 %= 100000   

##c5000 = money1 // 5000
##money1 %= 5000

##c1000 = money1 // 1000
##money1 %= 1000


##print("\n 10000원짜리 ==> %d개" % c10000)
##print("5000원짜리 ==> %d개" % c5000)
##print("1000원짜리 ==> %d개" % c1000)
##print("바꾸지 못한 돈 ==> %d원 \n" % money1)

#a = 99

##if a<100 :
#    print("100보다 작군요")
##print("100보다 큰 수를 쓰셨군요?")

##print("프로그램 종료")


##a = int(input("정수를 입력하세요 :"))

##if a % 2 == 0 :
##    print("짝수입니다")
##else :
##    print("홀수입니다")



##a = 75

##if a > 50 :
#    if a < 100 :
 #       print("50보다 크고 100보단 작아요")
  #  else :
   #     print("와 100보다 크네요")
#else :
 #   print("저런 50보다 작습니다")


#score = int(input("점수를 입력하세요 : "))

##if score >= 90 :
  #  print("a")
#else :
    #if score >= 80 :
    #    print("b")
    #else :
     #    if score >= 70 :
      #       print("c")
       #  else :
        #     if score >= 60 :
         #        print("d")
          #   else :
           #      print("f")
#print("학점입니다")

