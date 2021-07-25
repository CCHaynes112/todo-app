from todo.schemas.task_schema import TaskSchema
from todo.models.task import Task
from django.views.generic import View
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name='dispatch')
class TodosView(View):
    def get(self, request):
        tasks = Task.objects.filter()

        return JsonResponse({"tasks": TaskSchema().dump(tasks, many=True)})

    def delete(self, request, id):
        get_object_or_404(Task, id=id).delete()
        return JsonResponse({})
