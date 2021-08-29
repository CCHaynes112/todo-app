from django.contrib.auth.models import User
from django.core.management import call_command
from django.test import TestCase
from unittest import mock
import os


class CommandsTestCase(TestCase):
    @mock.patch.dict(os.environ, {"ADMIN_USERNAME": "admin"})
    def test_create_admin_user_exists(self):
        User.objects.create(username="admin", is_superuser=True)
        call_command("create_admin_user")
        self.assertEquals(User.objects.count(), 1)

    @mock.patch.dict(os.environ, {"ADMIN_USERNAME": "admin"})
    def test_create_admin_user_create(self):
        self.assertEquals(User.objects.count(), 0)
        call_command("create_admin_user")
        self.assertEquals(User.objects.count(), 1)
