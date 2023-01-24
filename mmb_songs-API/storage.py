import sqlite3
import pandas as pd



class DBStorage():
    def __init__(self):
        self.df = pd.read_csv('/home/makemybrain/mysite/songs_list.csv')
        # self.df = [["aao naa","https://youtu.be/q0I0YHmecJI","disgust","Arijit Singh"],["Roke Na Ruke Naina","https://youtu.be/HyLCgkQtluw","sadness","arijit singh"]]
        
    def songs_results(self, mood):
        df2=self.df
        
        df2=df2.loc[df2["mood"] == mood]
        return df2
        # df2 = self.df
        # final_arr = []
        # for i in range(len(df2)):
        #     if df2[i][2] == mood:
        #         final_arr.append(df2[i])
        # return final_arr
