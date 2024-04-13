FROM node:latest

WORKDIR /app

# Copy only package.json and package-lock.json to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

EXPOSE 5000

# Start nodejs server
CMD ["node", "Server.js"]





