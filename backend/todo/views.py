from django.http.response import JsonResponse
from stubs.auth_http_request import AuthenticatedHttpRequest
from typing import Any
from django.db.models import QuerySet

from todo.serializers import TaskSerializer
from todo.models import Task
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class TaskViewSet(viewsets.ModelViewSet):
    model = Task
    serializer_class = TaskSerializer
    http_method_names = ["get", "post", "patch", "delete"]
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    request: AuthenticatedHttpRequest

    def get_queryset(self) -> Any:
        return Task.objects.filter(user=self.request.user)
