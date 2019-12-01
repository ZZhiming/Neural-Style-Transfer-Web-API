# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
import os
from flask import Flask, flash, request, redirect, url_for, render_template, jsonify
from werkzeug.utils import secure_filename
import json
import time

import style_transfer as st

# Flask constructor takes the name of
# current module (__name__) as argument.
#app = Flask(__name__)

UPLOAD_FOLDER = "./web_style/static/uploads"
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    print("received ... ")
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            st.get_stlyed(filename)
            #time.sleep(20)
            return redirect(url_for('uploaded_file',
                                    filename=filename))
    return render_template("home_page.html")

@app.route('/', methods=['GET', 'POST'])
def upload_style():
    print("received ... ")
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file_style']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            st.get_stlyed(filename)
            #time.sleep(20)
            return redirect(url_for('uploaded_file',
                                    filename=filename))
    return render_template("home_page.html")


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    filename = "ok.jpg"
    full_filename = os.path.join("/static/uploads/", filename)
    return render_template("display_image.html", user_image=full_filename)
    #return render_template("display_image.html", user_image = '/Users/syang24/PycharmProjects/test1/uploads/hq.JPG')


@app.route('/create', methods=['GET', 'POST'])
def create_own():
    print("received ... ")
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file2' not in request.files:
            flash('No file part')
            return redirect(request.url)
        # file = request.files.getlist('file1')

        file = request.files['file2']

        r2 = request.form['hf']
        print("hffff: ", r2)

        fs = request.files
        print(fs)
        print(fs['file1'])

        print("this is the files", file)
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return render_template("create_own2.html")


# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/test')
def test():
    data = {"sdf": 9, "dd": 10, "zhiming": "got it"}
    return render_template("test.html", data=data)

@app.route('/test/data')
def test2():
    data = {"sdf": 9, "dd": 10,  "zhiming": "got it"}
    data2 = [1,2,33,44]
    ##return jsonify(data)
    return json.dumps(data2)





# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run(host='0.0.0.0', debug=True)



