import mysql.connector
from mysql.connector import errorcode

db_conn = mysql.connector.connect(user="ivan", password="1234")
db_cursor = db_conn.cursor()

DB_NAME = 'cs179g'

TABLES = {}
TABLES['Tips'] = (
    "CREATE TABLE `Tips` ("
    " `user_id` VARCHAR(25),"
    " `business_id` VARCHAR(25),"
    " `tip_text` TEXT,"
    " `tip_date` DATETIME,"
    " `compliment_count` INT"
    ")")

TABLES['Users'] = (
        "CREATE TABLE `Users` ("
        " `user_id` VARCHAR(25),"
        " `name` VARCHAR(25),"
        " `review_count` INT,"
        " `yelping_since` DATETIME,"
        " `useful` INT,"
        " `funny` INT,"
        " `cool` INT,"
        " `elite` TEXT"
        ")")

TABLES['ReviewsByTags'] = (
    "CREATE TABLE `ReviewsByTags` ("
    " `review_id` VARCHAR(25),"
    " `user_id` VARCHAR(25),"
    " `business_id` VARCHAR(25),"
    " `stars` INT,"
    " `useful` INT,"
    " `funny` INT, "
    " `cool` INT, "
    " `text` TEXT, "
    " `date` DATETIME"
    ")")

def create_db(cursor):
    try:
        cursor.execute(
            "CREATE DATABASE {} DEFAULT CHARACTER SET 'utf8'".format(DB_NAME))
    except mysql.connector.Error as err:
        print("Failed creating database: {}".format(err))
        exit(1)

try:
    db_cursor.execute("USE {}".format(DB_NAME))
except mysql.connector.Error as err:
    print("Database {} does not exists.".format(DB_NAME))
    if err.errno == errorcode.ER_BAD_DB_ERROR:
        create_db(db_cursor)
        print("Database {} created successfully.".format(DB_NAME))
        db_conn.database = DB_NAME
    else:
        print(err)
        exit(1)

for table_name in TABLES:
    table_description = TABLES[table_name]
    try:
        print("Creating table {}: ".format(table_name), end='')
        db_cursor.execute(table_description)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
            print("already exists.")
        else:
            print(err.msg)
    else:
        print("OK")

db_cursor.close()
db_conn.close()
