from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Users
from django.http import HttpResponse
# Create your views here.
def test(request):
    # here Users.object
    return HttpResponse('<h1> bruh </h1>')


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Users.objects.all()
    
    
        