# Use the official Node.js 18 image for building
FROM node:18-alpine3.19 AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies and build the application
RUN npm ci && npm run build

# Use a lighter base image for the production environment
FROM node:18-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Install dotenv module for runtime environment configuration
RUN npm install dotenv

# Copy the .env file to the working directory
COPY .env ./

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD [ "node", "dist/main.js" ]
