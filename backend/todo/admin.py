from django.contrib import admin
from .models import todo # imported the class


class todoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed') #command for admins

# Register your models here.

admin.site.register(todo, todoAdmin)

