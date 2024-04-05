from PIL import Image

def cut(path):
    im = Image.open(path)
    im_crop = im.crop((220, 400, 530, 680))
    im_crop.save(path, quality=95)

if __name__ == "__main__":
    im = Image.open("input.png")
    im_crop = im.crop((220, 400, 530, 680))
    im_crop.save('output.png', quality=95)
    print(im.size)