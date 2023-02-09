from django.urls import path
from .views import index


app_name = 'frontend'

urlpatterns = [
    path('', index),
    path('/',index),
    path('/logIn',index),
    path('/Bomb',index, name='Bomb'),
]