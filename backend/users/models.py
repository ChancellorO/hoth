from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=50)
    school = models.CharField(max_length=100)
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=50)
    pronouns = models.CharField(max_length=50)
    biography = models.TextField()
    #location = models.CharField(max_length=100)
    #email = models.CharField(max_length=100)
    completed= models.BooleanField(default=False)

    def _str_(self):
        return self.title