from todo.serializers import TaskSerializer
from todo.models import Task
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class TaskViewSet(viewsets.ModelViewSet):
    model = Task
    serializer_class = TaskSerializer
    http_method_names = ["get", "post", "patch", "delete"]
    permission_classes = [IsAuthenticated]
    queryset = model.objects.all()

    def get_queryset(self):
        return self.model.objects.filter(user=self.request.user)
