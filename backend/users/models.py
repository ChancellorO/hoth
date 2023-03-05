from django.db import models

# Create your models here.
class Users(models.Model):
    name = models.CharField(max_length=50)
    school = models.CharField(max_length=100)
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=50)
    pronouns = models.CharField(max_length=50)
    biography = models.TextField()

    def _str_(self):
        return self.title