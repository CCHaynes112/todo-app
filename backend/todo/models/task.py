from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    title = models.CharField(max_length=128)
    description = models.TextField(null=True, blank=True)
    user = models.ForeignKey(User, related_name="tasks", on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return self.title
