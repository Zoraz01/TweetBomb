from django.db import models

# Create your models here.

class Oauth_Tokens(models.Model):
    twitter_temp_oauth_token = models.CharField(max_length= 1024,default = None,null = True,db_index=True,)
    twitter_temp_oauth_token_secret = models.CharField(max_length= 1024,default = None,null=True)
    twitter_oauth_token = models.CharField(max_length = 1024,default=None,null = True)
    twitter_oauth_token_secret = models.CharField(max_length=1024,default=None, null=True)
    link = models.CharField(max_length=1024,default = None,null = True)
    