from django.contrib import admin
from django.http.response import JsonResponse
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserView, RegisterView
from todo.views import TaskViewSet


def health_check(request):
    return JsonResponse({"status": 200}, status=200)


router = DefaultRouter()
router.register(r"tasks", TaskViewSet)

urlpatterns = [
    path("v1/ch-admin/", admin.site.urls),
    path("v1/healthcheck/", health_check),
    path(
        "v1/auth/token/",
        TokenObtainPairView.as_view(),
        name="token_obtain",
    ),
    path(
        "v1/auth/token/refresh/",
        TokenRefreshView.as_view(),
        name="token_refresh",
    ),
    path("v1/user/", UserView.as_view(), name="user_view"),
    path("v1/register/", RegisterView.as_view(), name="register_user"),
    path("v1/", include(router.urls)),
]
