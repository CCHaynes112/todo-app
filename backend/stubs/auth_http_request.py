from rest_framework.request import Request
from django.contrib.auth.models import User


class AuthenticatedHttpRequest(Request):
    user: User
