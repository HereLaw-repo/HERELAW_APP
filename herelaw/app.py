from flask import Flask, render_template, request, jsonify, url_for, session
from service import create_app

if __name__ == "__main__":
    create_app().run(port=443, debug=True , host="0.0.0.0", ssl_context=('cert.pem', 'key.pem'))
