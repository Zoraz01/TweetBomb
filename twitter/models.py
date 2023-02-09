from django.db import models

# Create your models here.

class TwitterToken(models.Model):
    user = models.CharField(max_length=1024, unique=True)
    created = models.DateTimeField(auto_now_add=True)
    refresh_token = models.CharField(max_length=1024)
    access_token = models.CharField(max_length=1024)
    expires_in = models.DateTimeField()
    token_type = models.CharField(max_length=1024)