from django.db import models


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
    intro = models.CharField(max_length=500, null=True)
    para_1 = models.CharField(max_length=750, null=True)
    para_2 = models.CharField(max_length=750, null=True)
    para_3 = models.CharField(max_length=750, null=True)
    conclusion = models.CharField(max_length=500, null=True)
    cover_art = models.ImageField(upload_to='Covers/', blank=True, help_text="Please Include an image (*.png, *.jpeg")
    art_source = models.CharField(max_length=256, null=True)
    Author = models.ForeignKey('Author', on_delete=models.CASCADE, null=True)
    date = models.DateField(null=True)
    Genre = models.ManyToManyField('Genre')

    class Meta:
        ordering = ['pub_date']

    def __str__(self):
        return f"{self.Title, self.Author, self.Genre}"
