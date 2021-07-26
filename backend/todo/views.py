import json
import marshmallow
from todo.schemas.task_schema import TaskSchema
from todo.models.task import Task
from django.views.generic import View
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt


@method_decorator(csrf_exempt, name="dispatch")
class TodosView(View):
    def get(self, request):
        tasks = Task.objects.filter()
        return JsonResponse({"tasks": TaskSchema().dump(tasks, many=True)})

    def post(self, request):
        payload = json.loads(request.body)
        try:
            task_dict = TaskSchema().load(payload)
        except marshmallow.ValidationError as err:
            return JsonResponse({"error": err.messages}, status=422)

        task = Task.objects.create(**task_dict)
        return JsonResponse({"task": TaskSchema().dump(task)})

    def delete(self, request, id):
        get_object_or_404(Task, id=id).delete()
        return JsonResponse({})

    def patch(self, request, id):
        payload = json.loads(request.body)
        try:
            task_dict = TaskSchema().load(payload)
        except marshmallow.ValidationError as err:
            return JsonResponse({"error": err.messages}, status=422)

        task = get_object_or_404(Task, id=id)
        if "title" in task_dict:
            task.title = task_dict.get("title")
        if "description" in task_dict:
            task.description = task_dict.get("description")
        task.save()
        return JsonResponse({"task": TaskSchema().dump(task)})
