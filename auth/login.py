# auth/routes.py
from flask import Blueprint, request, render_template, redirect, url_for
from werkzeug.security import check_password_hash
from .models import User

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username=username).first()
        if not user or not check_password_hash(user.password_hash, password):
            # Invalid username or password
            return redirect(url_for('auth.login'))

        # Log the user in and redirect them to the main page
        login_user(user)
        return redirect(url_for('main.index'))

    return render_template('login.html')