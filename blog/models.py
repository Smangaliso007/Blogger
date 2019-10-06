from django.db import models
from django.conf import settings


# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=64, null=True)

    def __str__(self):
        return f"{self.name}"


class Author(models.Model):
    name = models.CharField(max_length=64, null=True)

    def __str__(self):
        return f"{self.name}"


class Article(models.Model):
    Title = models.CharField(max_length=64, null=True)
    editors_note = models.CharField(max_length=64, null=True, help_text="Please keep Max=64_Char")
    intro = models.TextField(max_length=1000, null=True)
    para_1 = models.TextField(max_length=1200, null=True)
    para_2 = models.TextField(max_length=1200, null=True)
    para_3 = models.TextField(max_length=1200, null=True)
    para_4 = mdels.TextField(null=True)
    conclusion = models.TextField(max_length=1000, null=True)
    cover_art = models.ImageField(default='default.png', blank=True, help_text="Please Include an image (*.png, *.jpeg")
    art_source = models.CharField(max_length=256, null=True)
    Author = models.ForeignKey('Author', on_delete=models.CASCADE, null=True)
    date = models.DateField(null=True)
    Genre = models.ManyToManyField('Genre')

    def __str__(self):
        return f"{self.Title, self.Author, self.Genre}"
