import tensorflow as tf
tf.enable_eager_execution()
import matplotlib.pylab as plt
import numpy as np

def crop_center(image):
    """Returns a cropped square image."""
    shape = image.shape
    new_shape = min(shape[1], shape[2])
    offset_y = max(shape[1] - shape[2], 0) // 2
    offset_x = max(shape[2] - shape[1], 0) // 2
    image = tf.image.crop_to_bounding_box(
      image, offset_y, offset_x, new_shape, new_shape)
    return image

###
def load_image(image_path, image_size=(400, 400), preserve_aspect_ratio=True):
    #image_path = "/Users/syang24/Downloads/hq.JPG"
    img = plt.imread(image_path).astype(np.float32)[np.newaxis, ...]
    if img.max() > 1.0:
        img = img / 255.
    if len(img.shape) == 3:
        img = tf.stack([img, img, img], axis=-1)
    img = crop_center(img)
    img = tf.image.resize(img, image_size, preserve_aspect_ratio=True)
    return img




import tensorflow_hub
m = tensorflow_hub.load("style_model")
#m = tensorflow_hub.load("C:\\Users\\zhiming.zhang\\Downloads\\style_model")

def get_stlyed(cimage_name, simage_name):
    #s = load_image("./web_style/static/uploads/picasso.jpg")
    s = load_image("./web_style/static/uploads/" + simage_name)

    #s = load_image("C:\\Users\\zhiming.zhang\\PycharmProjects\\test1\\web_style\\static\\uploads\\vangoh.jpg")
    #c = load_image("C:\\Users\\zhiming.zhang\\PycharmProjects\\test1\\web_style\\static\\uploads\\hq.JPG")
    #c = load_image("C:\\Users\\zhiming.zhang\\PycharmProjects\\test1\\web_style\\static\\uploads\\" + image_name)
    c = load_image("./web_style/static/uploads/" + cimage_name)



    outputs = m(tf.constant(c), tf.constant(s))
    o = outputs[0][0].numpy()
    plt.imsave("./web_style/static/uploads/ok.jpg", o)

# plt.figure(figsize=(8, 8))
# plt.imshow(outputs[0][0])
#
# from PIL import Image
# im = Image.fromarray(outputs[0][0].numpy())
# im.save("your_file.jpeg")


