# from tkinter import *
# window = Tk()

# btnlist = [None] * 10

# for i in range(0, 10):
#     btnlist[i] = Button(window, text="Button " + str(i + 1))

# for btn in btnlist:
#     btn.pack(side=TOP,fill=X,padx=10,pady=10,ipadx=10,ipady=10)

# window.mainloop()


# from tkinter import *
# from PIL import Image,ImageTk,imageOps 

# btnlist = [None] * 4
# fnamelist = ["u1.gif", "u2.gif", "u3.gif", "u4.gif"]
# photolist = [None] * 4

# i,j = 0,0
# xPos,yPos = 0,0
# num = 0

# window = Tk()
# window.geometry("210x210")

# for i in range(0, 4):
#      photolist[i] = PhotoImage(file="C:\\Users\\Admin\\Documents\\20230949_JS_python\\python\\image\\" + fnamelist[i])
#      btnlist[i] = Button(window, image=photolist[i])

# for i in range(0, 2):
#     for j in range(0, 2):
#         btnlist[num].place(x = xPos, y = yPos)
#         num += 1
#         xPos += 140
# xPos = 0
# yPos += 140

# window.mainloop()

from tkinter import *
from PIL import image, ImageTk, ImageOps

image_path = "C:\\Users\\Admin\\Documents\\20230949_JS_python\\python\\image\\u1.gif"
image = Image.open(image_path)
img_resized = ImageOps.contain(image, (200, 200))
tk_img = ImageTk.PhotoImage(img_resized)

window = Tk()
window.mainloop()