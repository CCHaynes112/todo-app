from django.http.response import JsonResponse
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from .serializers import CurrentUserSerializer, UserRegisterSerializer
from django.contrib.auth.models import User


class UserView(APIView):
    permission_classes = (IsAuthenticated,)
    http_method_names = ["get", "post"]

    def get(self, request, *args, **kwargs):
        return JsonResponse({"user": CurrentUserSerializer(request.user).data})


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserRegisterSerializer
