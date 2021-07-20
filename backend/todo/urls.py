from django.urls import path

from .views import TodosView

urlpatterns = [
    path('todos', TodosView.as_view(), name="todos"),
]
