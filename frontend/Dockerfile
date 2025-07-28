# frontend/Dockerfile

FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend
COPY . .

# Expose port Next.js dev server runs on
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]