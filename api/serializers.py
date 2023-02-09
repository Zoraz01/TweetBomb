from rest_framework import serializers
from .models import Oauth_Tokens

class Oauth_Token_Serializer(serializers.ModelSerializer):
    class Meta: 
        model = Oauth_Tokens
        fields = ('id','twitter_temp_oauth_token', 'twitter_temp_oauth_token_secret', 'twitter_oauth_token', 'twitter_oauth_token_secret','link')

class Create_Oauth_Token_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Oauth_Tokens
        fields = ('twitter_temp_oauth_token', 'twitter_temp_oauth_token_secret', 'twitter_oauth_token','twitter_oauth_token_secret','link')
