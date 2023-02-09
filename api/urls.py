
from django.urls import path, include
from .views import Oauth_View,Create_Oauth_View

urlpatterns = [
    path('Oauth',Oauth_View.as_view()),
    path('create-Ouath',Create_Oauth_View.as_view())   
]