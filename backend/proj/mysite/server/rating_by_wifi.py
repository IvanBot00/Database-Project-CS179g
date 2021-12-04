import pandas as pd
import mysql.connector
from pyspark.sql import SparkSession
#UNDER CONSTRUCTION
spark = SparkSession.builder.config("spark.jars", "/usr/share/java/mysql-connector-java-8.0.26.jar") \
            .master("local").appName("PySpark_MySQL_test").getOrCreate()

business_df = spark.read.format("jdbc").option("url", "jdbc:mysql://localhost:3306/cs179g") \
                        .option("driver", "com.mysql.jdbc.Driver").option("dbtable", "Business2") \
                            .option("user", "cthi001").option("password", "heehee").load().createOrReplaceTempView("business")


#INPUT
city = "\"Austin\""
state = "\"CA\""
wifi   = "\"u'free'\""
wifi2 = "\"'free'\""
def rbw_free():
    ff=spark.sql("select distinct d.state, sum(d.nbusiness), sum(d.totrating) from (SELECT distinct b.city,b.state, (Select count(b2.business_id) \
            from business b2 where b2.city = b.city and (b2.wifi = "+wifi+" or b2.wifi = "+wifi2+")) as nbusiness, \
            (select sum(b2.stars) from business b2 where b2.city = b.city and (b2.wifi = "+wifi+" or b2.wifi = "+wifi2+"))as totrating\
            FROM business b \
            WHERE (b.wifi = "+wifi+" or b.wifi = "+wifi2+")) as d group by d.state"
    )
    return ff
def rbw_no():
    ff=spark.sql("select distinct d.state,sum(d.nbusiness),sum(d.totrating) from (SELECT distinct b.city,b.state, (Select count(b2.business_id) \
            from business b2 where b2.city = b.city and NOT( b2.wifi = "+wifi+" or b2.wifi = "+wifi2+" or b2.wifi = \"null\")) as nbusiness, \
            (select sum(b2.stars) from business b2 where b2.city = b.city and NOT ( b2.wifi = "+wifi+" or b2.wifi = "+wifi2+" or b2.wifi = \"null\") )as totrating\
            FROM business b \
            WHERE not b.wifi = "+wifi+" and not b.wifi = "+wifi2+" and not b.wifi = \"null\" ) as d group by d.state"  \
    )
    return ff
rbw_free()
rbw_no()
# spark.sql("SELECT temp.state,sum(temp.nbusiness) from temp,(select distinct b.state from business b) as x where temp.state = x.state").show()
