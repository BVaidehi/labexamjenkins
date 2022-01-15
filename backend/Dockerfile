# base image
FROM node

# set the working directory
WORKDIR /app

# copy everything (including node_modules) to the container 
COPY . .

# expose port 4000
EXPOSE 4000
RUN npm install 
# run the server when the container starts
CMD node server.js