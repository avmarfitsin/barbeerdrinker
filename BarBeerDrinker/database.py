from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine=create_engine(config.database_uri)

def get_beers():
    with engine.connect() as con:
        rs=con.execute('SELECT Beer, Brewery FROM beers;')
        return [dict(row) for row in rs]

def get_bars():
    with engine.connect() as con:
        rs=con.execute("SELECT License, address, name, state, open_time, close_time FROM bars;")
        return [dict(row) for row in rs]

def get_likes(drinker):
    with engine.connect() as con:
        qr=sql.text('SELECT beer FROM likes WHERE drinker=:name;')
        rs=con.execute(qr, name=drinker)
        return [row['beer'] for row in rs]
        
def get_drinkers():
    with engine.connect() as con:
        rs=con.execute('SELECT Name, Addr, State, Phone FROM drinkers;')
        return [dict(row)for row in rs]        

def find_bar(name):
            with engine.connect() as con:
                query=sql.text(
                    "SELECT License, address, name, state, open_time, close_time FROM bars WHERE name=:name;"
                    )

                rs=con.execute(query,name=name)
                result=rs.first()
                if result is None:
                    return None
                return dict(result)

def filter_beers(max_price):
    with engine.connect as con:
        query=sql.text("SELECT * FROM sells WHERE price<:max_price")

        rs=con.execute(query,max_price=max_price)
        results=[dict(row) for row in rs]
        for r in results:
            r['price']=float(r['price'])

        return results

def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.bar, a.beer, a.price, b.Brewery \
            FROM sells as a \
            JOIN beers AS b \
            ON a.beer = b.Beer \
            WHERE a.bar = :bar; \
        ')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT bar, price FROM sells WHERE bar=:bar;')
        rs =  con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price']=float(results[i]['price'])
        return results

def get_beer_brewery(beer):
    with engine.connect() as con:
        if beer is None:
            rs= con.execute('SELECT DISTINCT Brewery FROM beers;')
            return [row['Brewery'] for row in rs]

        query = sql.text('SELECT Brewery FROM beers WHERE Beer=:beer;')
        rs =  con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['Brewery']

def get_transactions():
    with engine.connect() as con:
        rs=con.execute('SELECT id, drinker, bar, beer, item, total, time FROM transactions;')
        return [dict(row)for row in rs]    

def get_shifts():
    with engine.connect() as con:
        rs=con.execute('SELECT bar, bartender_1, bartender_2, bartender_3, bartender_4, bartender_5, shift_start, shift_end, shift_type FROM shifts;')
        return [dict(row)for row in rs] 

def get_bar_frequent_counts():
        with engine.connect() as con:
                query = sql.text('SELECT bar, count(*) as frequentCount \
                FROM frequents \
                GROUP BY bar; \
                        ')
                rs = con.execute(query)
                results = [dict(row) for row in rs]
                return results

def get_beer_likes():
        with engine.connect() as con:
                query = sql.text('SELECT beer, count(*) as likescount \
                FROM likes \
                GROUP BY beer ORDER BY likescount DESC limit 40; \
                        ')
                rs = con.execute(query)
                results = [dict(row) for row in rs]
                return results
