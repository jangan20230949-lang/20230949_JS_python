from tkinter import * # 파이썬 기본 GUI 제작도구인 tkinter 모든 기능 사용
from tkinter.filedialog import askopenfilename

def Func_open():
    filepath = askopenfilename(
        title = "gif 이미지 로드",filetypes = [("gif 파일","*.gif")]
    )
    tk_img = PhotoImage(file=filepath)
    image_label.config(image=tk_img)
    image_label.image = tk_img

def Func_exit():
    window.quit()
    window.destroy()
    
window = Tk() # 기본이 되는 윈도우 창 생성
image_label = Label(window)  # 이미지를 보여줄 라벨 생성
image_label.pack(expand=True)          # 라벨을 창에 배치

mainmenu = Menu(window) # 생성한 바탕 창에 부착할 메인메뉴 객체를 만들겠다 
window.config(menu=mainmenu) # 창의 속성을 변경하여 MAINMENU를 창에 넣겠다

filemenu = Menu(mainmenu)
viewmenu = Menu(mainmenu)
homemenu = Menu(mainmenu)

mainmenu.add_cascade(label="파일", menu=filemenu)
mainmenu.add_cascade(label="보기", menu=viewmenu)
mainmenu.add_cascade(label="홈", menu=homemenu)

filemenu.add_command(label="열기", command=Func_open)
filemenu.add_separator()
filemenu.add_command(label="종료", command=Func_exit)


viewmenu.add_command(label="확대보기")
viewmenu.add_command(label="축소보기")


homemenu.add_command(label="저장")
homemenu.add_command(label="선택")
homemenu.add_command(label="찾기")
window.mainloop()


# from tkinter import *
# from tkinter import messagebox

# def Func_open():
#     messagebox.showinfo("메뉴 선택", "메뉴 열기를 선택 함 ")

# def Func_exit():
#     window.quit()
#     window.destroy()

# window = Tk()


# window.mainloop()