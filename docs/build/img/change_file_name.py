import os

l = [14, 5, 6, 6, 6, 5, 3, 7, 3, 2, 2]
index = 1


for i in range(len(l)):
    for j in range(l[i]):
        now_file_name = f'./weapon{index}.png'
        new_file_name = f'./w{str(i*100+j).zfill(4)}.png'
        os.rename(now_file_name, new_file_name)
        index += 1