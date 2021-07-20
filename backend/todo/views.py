from django.views.generic import View
from django.http import JsonResponse


class TodosView(View):
    def get(self, request):
        return JsonResponse({"HelloWorld": True})
