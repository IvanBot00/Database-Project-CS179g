from django.shortcuts import render
from django.http import HttpResponse
import json
import collections
import mysql.connector
from pyspark.sql import SparkSession
from .rating_by_wifi import *


# Create your views here.

db_connection = mysql.connector.connect(user="tnguy339", password="heehee")

def main(request):
    return HttpResponse("This is the main page")

def avgRatingsRestaurantTypes(request):
    print(request.method)
    if request.method != "GET":
        return HttpResponse("Invalid request!")
    print(request.GET["Test"])

    db_cursor = db_connection.cursor()
    db_cursor.execute("USE cs179g;")
    db_cursor.execute("SELECT stars FROM Reviews LIMIT 5;")
    
    rows = db_cursor.fetchall()
    json_data = []
    for row in rows:
        temp = (row[0])
        json_data.append(temp)
    
    db_cursor.close()
    res = json.dumps(json_data)

    return HttpResponse(res)
    #return HttpResponse(request.GET["Test"] + " Average ratings between restaurant types will be displayed here")

def avgTipsRestaurantTypes(request):
    return HttpResponse("Average tips between restarurant types")

def usersOneReview(request):
    return HttpResponse("percentage of users with only one review")

def WiFi(request):
    data = []
    data2 = []
    df = rbw_free()
    df2 = rbw_no()
    
    for i in df.collect():
        row = collections.OrderedDict()
        row['state'] = i[0]
        row['Average Rating WiFi'] = i[2] / i[1]
        data.append(row)
    # print(data)

    for i in df2.collect():
        row = collections.OrderedDict()
        row['state'] = i[0]
        row['Average Rating no WiFi'] = i[2] / i[1]
        data.append(row)
    '''combine = []
    combine.append(data)
    combine.append(data2)
    resp = json.dumps(combine)
    '''
    resp = json.dumps(data)
    '''
    res = []
    dummyData = collections.OrderedDict()
    dummyData["label"] = "first"
    dummyData["value"] = 1
    res.append(dummyData)
    dummyData2 = collections.OrderedDict()
    dummyData2["label"] = "second"
    dummyData2["value"] = 2
    res.append(dummyData2)
    
    resp = json.dumps(res)
    '''
    return HttpResponse(resp)

def stars(request):
    return HttpResponse("sort reviews of each restaurant b how many stars")

def avgRatingPerCity(request):
    return  HttpResponse("average ratings for all restaurants in a city")

def avgSentimentPerState(request):
    db_cursor = db_connection.cursor()
    db_cursor.execute("use cs179g;")

    query = 'SELECT state, AVG(sentiment) FROM Sentiment, Business2 WHERE Sentiment.business_id = Business2.business_id GROUP BY state;'

    print(query)
    
    db_cursor.execute(query)

    data = []
    rows = db_cursor.fetchall()
    for r in rows:
        t = collections.OrderedDict
        t['state'] = r[0]
        t['sentiment'] = r[1]
        data.append(t)

    db_cursor.close()
    json_data = json.dumps(data)

    return HttpResponse(json_data)

def userSearch(request):
    db_cursor = db_connection.cursor()
    db_cursor.execute("use cs179g;")
    
    param = request.GET

    query = ''
    if (request.GET["name"] == ''):
        query = "SELECT * FROM Users WHERE (" + \
                    " review_count >= " + param["reviewCountMin"] +\
                    " AND review_count <= " + param["reviewCountMax"] +\
                    " AND yelping_since >= " +  param["yelping_since"] +\
                    " AND useful >= " +  param["usefulMin"] +\
                    " AND useful <= " +  param["usefulMax"] +\
                    " AND funny >= " +  param["funnyMin"] +\
                    " AND funny <= " +  param["funnyMax"] +\
                    " AND cool >= " +  param["coolMin"] +\
                    " AND cool <= " +  param["coolMax"] + \
                    ");"
    else :
        query = "SELECT * FROM Users WHERE (" +\
                    " name = '" + param["name"] + "'" +\
                    " AND review_count >= " +  param["reviewCountMin"] +\
                    " AND review_count <= " +  param["reviewCountMax"] +\
                    " AND yelping_since >= '" + param["yelping_since"] + "'" +\
                    " AND yelping_since >= '" + param["yelping_since"] + "'" +\
                    " AND useful >= " +  param["usefulMin"] +\
                    " AND useful <= " +  param["usefulMax"] +\
                    " AND funny >= " +  param["funnyMin"] +\
                    " AND funny <= " +  param["funnyMax"] +\
                    " AND cool >= " + param["coolMin"] +\
                    " AND cool <= " + param["coolMax"] +\
                    " );"
    
    print(query)
    db_cursor.execute(query)
    
    data = []
    rows = db_cursor.fetchall()
    for r in rows:
        t = collections.OrderedDict()
        t['user_id'] = r[0]
        t['name'] = r[1]
        t['review_count'] = r[2]
        t['yelping_since'] = str(r[3])
        t['useful'] = r[4]
        t['funny'] = r[5]
        t['cool'] = r[6]
        t['elite'] = r[7]
        data.append(t)

    db_cursor.close()
    json_data = json.dumps(data)

    return HttpResponse(json_data)

def businessSearch(request):
    # return HttpResponse("nusiness Search")
    db_cursor = db_connection.cursor()
    db_cursor.execute("use cs179g;")

    param = request.GET
    
    query = "SELECT * FROM Business2 WHERE (" +\
            "stars >= " + param["MinimumStars"] +\
            " AND review_count >= " + param["MinimumReviews"]
    if param["name"] != "":
        query += " AND name = '" + param["name"] + "'"
    if param["city"] != "":
        query += " AND city = '" + param["city"] + "'"
    if param["state"] != "":
        query += " AND state = '" + param["state"] + "'"
    if int(param["postal_code"]) > -1:
        query += " AND postal_code = " + str(param["postal_code"])
    query += ");"
    # type query here
    print(query)

    db_cursor.execute(query)

    data = []
    rows = db_cursor.fetchall()
    
    for r in rows:
        t = collections.OrderedDict()
        # get data here
        t['business_id'] = r[0]
        t['name'] = r[1]
        t['address'] = r[2]
        t['city'] = r[3]
        t['state'] = r[4]
        t['postal_code'] = r[5]
        t['stars'] = r[6]
        t['review_count'] = r[7]
        t['is_open'] = r[8]
        t['wifi'] = r[9]
        t['wheelchair'] = r[10]
        t['happpy'] = r[11]
        t['dog'] = r[12]
        t['tv'] = r[13]
        t['takout'] = r[14]
        t['oseat'] = r[15]
        t['parking'] = r[16]
        data.append(t)
    
    db_cursor.close()
    json_data = json.dumps(data)
    return HttpResponse(json_data)

