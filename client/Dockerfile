# Stage 1: Build the React app
FROM node:alpine as build

WORKDIR /app

# Copy only package.json and package-lock.json to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the static files using nginx
FROM nginx:alpine

# Copy the built static files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx to serve static files
CMD ["nginx", "-g", "daemon off;"]
