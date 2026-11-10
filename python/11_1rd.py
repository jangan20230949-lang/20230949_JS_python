from tkinter import *
from tkinter import messagebox

def clickLeft(event):
    messagebox.showinfo("마우스", "마우스 왼쪽 더블 클릭됨")

window = Tk()

window.bind("<Double-1>", clickLeft)

window.mainloop()