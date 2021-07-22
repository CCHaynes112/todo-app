from todo.schemas.task_schema import TaskSchema
from todo.models.task import Task
from django.views.generic import View
from django.http import JsonResponse


class TodosView(View):
    def get(self, request):
        tasks = Task.objects.filter()

        return JsonResponse({"tasks": TaskSchema().dump(tasks, many=True)})
