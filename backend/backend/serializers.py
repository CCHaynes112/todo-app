from typing import Any
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User


class CurrentUserSerializer(serializers.ModelSerializer[User]):
    class Meta:
        model = User
        fields = ("username", "email", "id")


class UserRegisterSerializer(serializers.ModelSerializer[User]):
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ("username", "password", "email")

    def create(self, validated_data: Any) -> User:
        user = User.objects.create(username=validated_data["username"], email=validated_data["email"])
        user.set_password(validated_data["password"])
        user.save()
        return user
