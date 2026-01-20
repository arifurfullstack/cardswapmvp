FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY .npmrc ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port for preview (optional)
EXPOSE 3000

# Default command
CMD ["npm", "run", "preview"]
