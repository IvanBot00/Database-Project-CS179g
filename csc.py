import csv
import pandas as pd
import os
import sys
import json
i=1
Chunksize = 10
#name = "data/yelp_academic_dataset_checkin.json"
path = os.listdir("data")
namelist = [i for i in path if i.endswith('.json')]
for name in namelist:
    name = "data/" + name
    desired_element = "_"
    indexes = [index for index, element in enumerate(name) if element == desired_element]
    sec = name[indexes[2]+1:name.find(".")]
    try:
        os.mkdir("data/"+sec)
    except:
        print("Directory "+sec+" exist.")
    for chunk in pd.read_json(name,chunksize=Chunksize,lines = True):
        #print(mlist)
        st1="data/"+sec+"/f"
        st2 = ".csv"
        st = st1 + str(i) + st2
        try:
            chunk.to_csv(st)
        except:
            print("export error")
            exit();
        i = i + 1
    i=1
