from django.urls import path
from.views import AuthURL, twitter_callback,IsAuthenticated

urlpatterns = [
    path('get-auth-url', AuthURL.as_view()),
    path('redirect',twitter_callback),
    path('is_authenticated',IsAuthenticated.as_view())
]