# Use Node.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose Vite dev port
EXPOSE 3000

# Start Vite dev server
CMD ["npm", "start"]
