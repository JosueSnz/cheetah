from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/pagina")
def pagina():
    return render_template("pagina.html")

if __name__ == "__main__":
    app.run()

