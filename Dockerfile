# Use a lighter version of Node as a parent image
FROM node:16-alpine3.11
# Set the working directory to /client
WORKDIR /app
# copy package.json into the container at /client
COPY package*.json ./
# install dependencies
RUN npm install --production
# Copy the current directory contents into the container at /client
COPY . .
RUN rm -rf server
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the app when the container launches
CMD ["npm", "start"]
