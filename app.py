from flask import Flask

csrf = CSRFProtect()
app = Flask(__name__)
app.config["SECRET_KEY"] = "shmoken"
csrf.init_app(app)

@app.route('/index')
def index():
    return render_template("index.html")
