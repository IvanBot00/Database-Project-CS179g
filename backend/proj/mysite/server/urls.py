from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('avgratingsRType/', views.avgRatingsRestaurantTypes, name='avgRatingsRType'),
    path('avgtipsRType/', views.avgTipsRestaurantTypes, name='avgTipsRType'),
    path('userone/', views.usersOneReview, name='userone'),
    path('wifi/', views.WiFi, name='wifi'),
    path('stars/', views.stars, name='stars'),
    path('avgratingscity/', views.avgRatingPerCity, name='avgRatingsCity'),
    path('userSearch/', views.userSearch, name = 'userSearch'),
    path('avgSentimentPerState/', views.avgSentimentPerState, name='avgSentimentsState'),
    path('businessSearch/', views.businessSearch, name='businessSearch')
]
