from flask import Flask, request
from storage import DBStorage
from flask_cors import CORS
# import AlgorithmA
import random
import json

app = Flask(__name__)
CORS(app)

@ app.route("/GetSongs", methods=['GET', 'POST'])
def search_songs():
    storage = DBStorage()

    if request.method == 'GET':
        query="sssss"
        mood = 'sad'
        df= storage.songs_results(mood)
        randIndex = random.randint(0, df.shape[0]-1)
        df= storage.songs_results(mood)
        song =df.iloc[randIndex].values
        print(song)
        data = {
            "title":song[1],
            "URL":song[2],#TODO
        }
        data=json.dumps(data)
        return data
        # return df.take([0])['title']
    elif request.method == 'POST':
        # query = json.load(request.json)
        query=request.get_json()['mood_query']
        mood=query#Algorithm
        print(mood)
        df= storage.songs_results(mood)
        songs=[]
        for i in range(df.shape[0]):
            song=df.iloc[i].values
            songs.append({
            "title":song[1],
            "URL":song[2],
            "singer":song[5]
            })
        songs=json.dumps(songs)
        return songs

if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0')