import os

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "ci_test",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}

PASSWORD_HASHERS = [
    "django.contrib.auth.hashers.MD5PasswordHasher",
]

MIGRATE = bool(os.getenv("MIGRATE", False))
