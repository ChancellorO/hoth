from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import todo

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer # serialize it into a json object
    queryset = todo.objects.all() # all objects