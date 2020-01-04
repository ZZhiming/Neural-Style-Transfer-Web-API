import tensorflow as tf
tf.enable_eager_execution()
import matplotlib.pylab as plt
import numpy as np
import tensorflow_hub

def crop_center(image):
    """Returns a cropped square image."""
    shape = image.shape
    new_shape = min(shape[1], shape[2])
    offset_y = max(shape[1] - shape[2], 0) // 2
    offset_x = max(shape[2] - shape[1], 0) // 2
    image = tf.image.crop_to_bounding_box(
      image, offset_y, offset_x, new_shape, new_shape)
    return image


def load_image(image_path, image_size=(400, 400), preserve_aspect_ratio=True):
    img = plt.imread(image_path).astype(np.float32)[np.newaxis, ...]
    if img.max() > 1.0:
        img = img / 255.
    if len(img.shape) == 3:
        img = tf.stack([img, img, img], axis=-1).numpy()
    img = crop_center(img)
    img = tf.image.resize(img, image_size, preserve_aspect_ratio)
    return img


# load the GAN style transfer model
model = tensorflow_hub.load("style_model")


def get_stlyed(cimage_name, simage_name):
    style = load_image("./web_style/static/uploads/" + simage_name)

    content = load_image("./web_style/static/uploads/" + cimage_name)

    outputs = model(tf.constant(content), tf.constant(style))
    img_arr = outputs[0][0].numpy()
    plt.imsave("./web_style/static/uploads/ok.jpg", img_arr)


