from django.contrib import admin
from django.urls import path
from crud import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', views.home, name='home'),
    path('create/', views.create_student, name='create'),
    path('update/<int:id>/', views.update_student, name='update'),
    path('delete/<int:id>/', views.delete_student, name='delete'),
]
