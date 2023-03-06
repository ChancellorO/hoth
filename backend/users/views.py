from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Users
from django.http import HttpResponse, JsonResponse
from .algorithms import algorithms

# Create your views here.
def test(request):
    # here Users.object
    return HttpResponse('<h1> bruh </h1>')
def match(request):
    queryset = Users.Objects.all()
    best = algorithms.match(queryset, something)
    bestInfo = Users.objects.filter(id=best)[0]
    print(bestInfo)
    return JsonResponse(bestInfo)


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Users.objects.all()
    
    
        