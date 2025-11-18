from django.db import models
from cloudinary.models import CloudinaryField



class Student(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    image =CloudinaryField('image')

    def __str__(self):
        return self.name
