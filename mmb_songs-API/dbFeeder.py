from storage import DBStorage
import pandas as pd

def ReadCSV(file_name):
    df = pd.read_csv(file_name)
    return df

def FeedDatabase(file_name):
    storage = DBStorage()
    df = ReadCSV(file_name)
    for index,row in df.iterrows():
        # print(row['title'], row['url'], row['mood'], row['language'],row['singer'], row['pace'], row['pop'])
        storage.insert_row(row['title'], row['url'], row['mood'], row['language'],row['singer'], row['pace'], row['pop'])
    print('Database fed!')