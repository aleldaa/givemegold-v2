from flask import render_template, request, jsonify, make_response, session
from flask_restful import Resource, reqparse
from werkzeug.utils import secure_filename


# Local imports
from config import app, db, api, bcrypt


if __name__ == '__main__':
    app.run(port=5555)
