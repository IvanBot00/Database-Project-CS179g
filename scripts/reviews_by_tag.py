from pyspark.sql import SparkSession
from pyspark.sql.functions import col, row_number
from pyspark.sql.window import Window
from pyspark import SparkContext, SparkConf

#
# RUN COMMAND
#
# time spark-submit ~/script/reviews_by_tag.py 2>/dev/null

# Cluster
# MASTER_URL = "spark://localhost:7077"
# Locally with 1 thread
# MASTER_URL = "local"
# Locally with 2 threads
MASTER_URL = "local[2]"

spark = SparkSession.builder.master(MASTER_URL).appName("Reviews by Tags").getOrCreate()

path = "../data/reviewJSON/review_large.json"
review_df = spark.read.json(path)

# windowUseful = Window.partitionBy("stars").orderBy(col("useful").desc())
# review_df.withColumn("row", row_number().over(windowUseful)) \
#     .filter(col("row") == 1).drop("row").write.mode("overwrite").json("useful_reviews")

windowCool = Window.partitionBy("stars").orderBy(col("cool").desc())
review_df.withColumn("row", row_number().over(windowCool)) \
    .filter(col("row") == 1).drop("row").write.mode("overwrite").json("cool_reviews")

windowFunny = Window.partitionBy("stars").orderBy(col("funny").desc())
review_df.withColumn("row", row_number().over(windowFunny)) \
    .filter(col("row") == 1).drop("row").write.mode("overwrite").json("funny_reviews")

# RUN COMMAND
# time spark-submit ~/script/reviews_by_tag.py 2>/dev/null