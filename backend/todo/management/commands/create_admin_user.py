import os
from typing import Any

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = "Creates an initial admin user"

    def handle(self, *args: Any, **options: Any) -> None:
        username = os.getenv("ADMIN_USERNAME", "admin")
        if User.objects.filter(username=username, is_superuser=True).exists():
            print("Admin exists")
        else:
            u = User(username=username)
            password = os.getenv("ADMIN_PASSWORD", "admin")
            u.set_password(password)
            u.is_superuser = True
            u.is_staff = True
            u.save()
            print("Admin created")
