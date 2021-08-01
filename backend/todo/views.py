from todo.serializers import TaskSerializer
from todo.models import Task
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class TaskViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete']
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        if self.request.user.is_superuser:
            return Task.objects.all()
    
    def get_object(self):
        lookup_field_value = self.kwargs[self.lookup_field]
        obj = Task.objects.get(lookup_field_value)
        self.check_object_permissions(self.request, obj)
        return obj
