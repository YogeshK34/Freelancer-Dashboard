from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    client = models.ForeignKey('clients.Client', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=[
        ('ACTIVE', 'Active'),
        ('COMPLETED', 'Completed'),
        ('ON_HOLD', 'On Hold'),
    ])

    def __str__(self):
        return self.name