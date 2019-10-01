from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path("articles/<int:article_id>", views.reader, name='articles'),
    url(r'^(?P<genre_name>\w+)', views.genres, name='genres'),
    ]
