from django.shortcuts import render,redirect
from .credentials import REDIRECT_URI,CLIENT_ID,CLIENT_SECRET
from rest_framework.views import APIView
from requests import Request,post
from rest_framework import status
from rest_framework.response import Response
from .util import get_user_tokens,is_Twitter_authenticated,refresh_twitter_token,update_or_create_user_tokens

class AuthURL(APIView):
    def get(self,request,fornat=None):
         scopes = 'tweet.read users.read like.read block.write'
         url = Request('GET', 'https://api.twitter.com/oauth/authorize',params={
             'scope':scopes,
             'response-type': 'code',
             'redirect_uri': REDIRECT_URI,
             'client_id': CLIENT_ID
         }).prepare().url
         
         return Response({'url':url},status =status.HTTP_200_OK)
     
def twitter_callback(request,fromat = None):
    code = request.GET.get('code')
    error = request.GET.get('error')
        
    response = post('https://api.twitter.com/oauth/request_token', data ={
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }).json()
        
    access_token = response.get('access_token')
    token_type = response.get('token_type')
    refresh_token = response.get('refresh_token')
    expires_in = response.get('expires_in')
    error = response.get('error')
        
    "if not request.session.exists(request.session.session_key):"
    "request.session.create()"

    "update_or_create_user_tokens("
    "request.session.session_key, access_token, token_type, expires_in, refresh_token) "

    return redirect('frontend:Bomb')
    
    
class IsAuthenticated(APIView):
    def get(self, request, format=None):
        is_authenticated = is_Twitter_authenticated(
            self.request.session.session_key)
        return Response({'status': is_authenticated}, status=status.HTTP_200_OK)