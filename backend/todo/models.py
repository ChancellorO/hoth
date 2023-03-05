from django.db import models

# Create your models here.

class todo (models.Model): #Makes the information for each object in the database 
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed= models.BooleanField(default=False)

    def _str_(self):
        return self.title # returns the title of the todo project for the object

