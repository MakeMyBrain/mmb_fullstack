# Dev Architecture

Follow instructions to setup work environment.

Install requirements:

```bash
pip install requirements
```

or

```bash
pip install flask pandas
```

## Feeding song database

Edit the CSV file and Delete songs.db file.

```bash
rm -rf songs.db
```

Run Feeder function

```bash
python3
```

```python
from dbFeeder import FeedDatabase
```

```python
FeedDatabase('songs_list.csv')
```

```python
exit()
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
