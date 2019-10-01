from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path("articles/<int:article_id>", views.reader, name='articles'),
    path("articles/(?P<genre_name>\w+)", views.genres, name='genres'),
    ]
