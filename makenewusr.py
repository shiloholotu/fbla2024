import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate('key.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://fbla-decfd-default-rtdb.firebaseio.com/'
})

def create_user(username, password):
    ref = db.reference('users')
    user_data = {
        'username': username,
        'password': password,  # Should hash this
    }
    user_ref = ref.push(user_data)
    return user_ref.key  # This is the new user's ID

def get_user(user_id):
    ref = db.reference(f'users/{user_id}')
    return ref.get()

"""print(create_user("test", "password"))"""
print(get_user("-NuMhJiMjZPmmB7QR0UG"))  # Should print the user data