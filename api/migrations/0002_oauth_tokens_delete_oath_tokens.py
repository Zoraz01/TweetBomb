# Generated by Django 4.1.6 on 2023-02-09 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Oauth_Tokens',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('twitter_temp_oauth_token', models.CharField(db_index=True, default=None, max_length=1024, null=True)),
                ('twitter_temp_oauth_token_secret', models.CharField(default=None, max_length=1024, null=True)),
                ('twitter_oauth_token', models.CharField(default=None, max_length=1024, null=True)),
                ('twitter_oauth_token_secret', models.CharField(default=None, max_length=1024, null=True)),
                ('link', models.CharField(default=None, max_length=1024, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Oath_tokens',
        ),
    ]
