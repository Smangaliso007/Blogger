# Generated by Django 2.2.4 on 2019-09-25 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20190925_0245'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='conclusion',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='intro',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='para_1',
            field=models.CharField(max_length=1500, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='para_2',
            field=models.CharField(max_length=1500, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='para_3',
            field=models.CharField(max_length=1500, null=True),
        ),
    ]
