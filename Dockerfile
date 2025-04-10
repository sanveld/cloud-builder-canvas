FROM node:18 as builder

WORKDIR /app
COPY package.json ./
COPY bun.lockb ./

# Install dependencies (using npm since we're on node image)
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Use NGINX for serving the built app
FROM nginx:stable-alpine

# Copy the built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
