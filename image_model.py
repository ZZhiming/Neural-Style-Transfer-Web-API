import os


class ImageModel:
    def __init__(self):
        self.images = self.get_images()

    def get_images(self):
        results = []
        images = os.listdir("web_style/static/styles")
        for i in images:
            name = i
            path = "static/uploads/" + name
            results.append({"name": name, "path": path})
        return results

