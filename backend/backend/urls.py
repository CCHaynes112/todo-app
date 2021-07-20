from django.contrib import admin
from django.http.response import JsonResponse
from django.urls import path, include


def health_check(request):
    return JsonResponse({"status": 200}, status=200)


urlpatterns = [
    path('api/v1/admin/', admin.site.urls),
    path("api/v1/", include("todo.urls")),
    path("api/v1/healthcheck", health_check),
]
