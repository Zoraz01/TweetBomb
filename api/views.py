from django.shortcuts import render
from rest_framework import generics, status
from .models import Oauth_Tokens 
from .serializers import Oauth_Token_Serializer, Create_Oauth_Token_Serializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class Oauth_View(generics.ListAPIView):
    queryset = Oauth_Tokens.objects.all()
    serializer_class = Oauth_Token_Serializer


class Create_Oauth_View(APIView):
    serializer_class = Create_Oauth_Token_Serializer
    
    
    def post(self,request,format = None):
        self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            twitter_temp_oauth_token = serializer.data.get("twitter_temp_oauth_token")
            twitter_temp_oauth_token_secret = serializer.data.get("twitter_temp_oauth_token_secret")
            twitter_oauth_token = serializer.data.get("twitter_oauth_token")
            twitter_oauth_token_secret = serializer.data.get("twitter_oauth_token_secret")
            link = serializer.data.get("link")
            Oauth = Oauth_Tokens(twitter_temp_oauth_token = twitter_temp_oauth_token,twitter_temp_oauth_token_secret = twitter_temp_oauth_token_secret, 
                                 twitter_oauth_token = twitter_oauth_token,twitter_oauth_token_secret = twitter_oauth_token_secret,link = link)
            Oauth.save()
            
            return Response(Oauth_Token_Serializer(Oauth).data,status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request':'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)