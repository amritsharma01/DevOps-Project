# Step 1: Build the React app using Node.js
FROM node:20 as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire source code
COPY . .

# Ensure the esbuild binary is executable (important for some systems)
RUN chmod +x /app/node_modules/@esbuild/linux-x64/bin/esbuild

# Build the app for production (this will output to the 'dist' folder)
RUN npm run build

# Step 2: Use Nginx to serve the production build
FROM nginx:alpine

# Copy the production build from the previous stage (from the 'dist' folder)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
