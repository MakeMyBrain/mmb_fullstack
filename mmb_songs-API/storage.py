import sqlite3
import pandas as pd

class DBStorage():
    def __init__(self):
        self.con=sqlite3.connect('songs.db')
        self.setup_tables()

    def setup_tables(self):
        cur = self.con.cursor()
        songs_table =r"""
        CREATE TABLE IF NOT EXISTS songs(
            id INTEGER PRIMARY KEY,
            title TEXT,
            url TEXT,
            mood TEXT,
            language TEXT,
            singer TEXT,
            pace TEXT,
            pop TEXT,
            UNIQUE(url)
        )
        """

        cur.execute(songs_table)
        self.con.commit()
        cur.close()

    def songs_results(self, mood):
        df = pd.read_sql(
            f"select * from songs where mood='{mood}' order by id asc", self.con)
        return df

    #TODO
    def insert_row(self, title, url, mood, language, singer, pace, pop):
        cur = self.con.cursor()
        values =(title, url, mood, language, singer, pace, pop)
        try:
            cur.execute(
                'INSERT INTO songs (title, url, mood, language, singer, pace, pop) VALUES(?, ?, ?, ?, ?, ?, ?)',values)
            self.con.commit()
        except sqlite3.IntegrityError:
            pass
        cur.close()