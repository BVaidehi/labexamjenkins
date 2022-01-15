# base image
FROM mysql

# set environment variables
ENV MYSQL_ROOT_PASSWORD "password"
ENV MYSQL_DATABASE "mydb"

# expose port 3306
EXPOSE 3306

# copy the db.sql to /docker-entrypoint-initdb.d
COPY db.sql /docker-entrypoint-initdb.d/
