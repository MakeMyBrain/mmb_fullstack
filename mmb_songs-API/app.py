from flask import Flask, request
from storage import DBStorage
from flask_cors import CORS
# import AlgorithmA
import random
import json

app = Flask(__name__)
CORS(app)

# x = []
# cur = [Aao Na,https://youtu.be/q0I0YHmecJI,disgust,hindi,suzonn,medium,"69,000"]
# x.append(cur)

@ app.route("/GetSongs", methods=['GET', 'POST'])
def search_songs():
    storage = DBStorage()

    if request.method == 'GET':
        
        return "Route working"
    elif request.method == 'POST':
        query=request.get_json()['mood_query']
        mood=query#Algorithm
        print(mood)
        df= storage.songs_results(mood)
        songs=[]
        for i in range(df.shape[0]):
            song=df.iloc[i].values
            songs.append({
            "title":song[0],
            "URL":song[1],
            "singer":song[4]
            })
        # for i in range(len(df)):
        #     songs.append({
        #         "title":df[i][0],
        #         "URL":df[i][1],
        #         "singer":df[i][3]
        #     })
        songs=json.dumps(songs)
        return songs

