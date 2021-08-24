from django.http.response import JsonResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from .serializers import CurrentUserSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken


class UserView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        return JsonResponse({"user": CurrentUserSerializer(request.user).data})
