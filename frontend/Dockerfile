# Use an official Node.js runtime as the parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code into the container
COPY . .

# Ensure esbuild binary is executable
RUN chmod +x /app/node_modules/@esbuild/linux-x64/bin/esbuild

# Expose the port your app will run on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
