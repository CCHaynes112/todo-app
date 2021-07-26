from django.contrib import admin
from django.http.response import JsonResponse
from django.urls import path, include
from django.conf import settings

from rest_framework import routers

from todo.views import TaskViewSet


def health_check(request):
    return JsonResponse({"status": 200}, status=200)


router = routers.DefaultRouter()
router.register(r"tasks", TaskViewSet)


urlpatterns = [
    path("v1/admin/", admin.site.urls),
    path("v1/healthcheck", health_check),
    path("v1/", include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += [path("v1/api-auth", include("rest_framework.urls", namespace="rest_framework"))]
