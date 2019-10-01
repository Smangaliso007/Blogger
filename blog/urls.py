from django.urls import path, re_path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^articles/<int:article_id>', views.reader, name='articles'),
    re_path(r'^articles/genres/(?P<genre_name>\w+)', views.genres, name='genres'),
    ]
