from django.shortcuts import render
from .models import *
from django.http import HttpResponse, Http404


# Create your views here.
def index(request):
    context = {
        "Articles": Article.objects.all(),
        "Genres": Genre.objects.all(),
        }
        def get_absolute_url():
            return reverse('index')

    return render(request, "blog/index.html", context, get_absolute_url)

    def get_absolute_url():
        return reverse('index')


def reader(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Oops Something went wrong. Please wait a moment and try again Later")
    context = {
        "Articles": Article.objects.all(),
        "Genres": Genre.objects.all(),
        "Content": article,
        }
        def get_absolute_url():
            return reverse('index')

    return render(request, "blog/articles.html", context, get_absolute_url)

def genres(request, genre_id):
    try:
        genre = Genre.objects.get(pk=genre_id)
    except Genre.DoesNotExist:
        raise Http404("Oops Something went wrong. Please wait a momemnt and try again later")
    context = {
    "Articles": Article.objects.all().filter(Genre=genre_id),
    "Genres": Genre.objects.all(),
    "center": genre,

    }
    def get_absolute_url():
        return reverse('index')

    return render(request, "blog/Genres.html", context, get_absolute_url)
