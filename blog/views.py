from django.shortcuts import render
from .models import *
from django.http import HttpResponse, Http404


# Create your views here.
def index(request):
    context = {
        "Articles": Article.objects.all()
        }
    return render(request, "blog/index.html", context)


def reader(request, article_id):
    try:
        article = Article.objects.get(pk=article_id)
    except Article.DoesNotExist:
        raise Http404("Oops Something went wrong. Please wait a moment and try again Later")
    context = {
        "Articles": Article.objects.all(),
        "Content": article
        }
    return render(request, "blog/articles.html", context)

