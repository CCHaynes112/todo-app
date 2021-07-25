from django.contrib import admin
from django.http.response import JsonResponse
from django.urls import path, include


def health_check(request):
    return JsonResponse({"status": 200}, status=200)


urlpatterns = [
    path('v1/admin/', admin.site.urls),
    path("v1/", include("todo.urls")),
    path("v1/healthcheck", health_check),
]
