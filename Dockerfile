# --- STAGE 1: Dependency Installation and Build ---
# Use a Node.js image suitable for building Next.js apps.
# We use the slim version for smaller layers.
FROM node:20-slim AS builder

# Set the working directory inside the container
WORKDIR /app

# Install dependencies needed for production build
# We copy package.json and lock files first to leverage Docker layer caching.
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application source code
# This includes the public, src, and next.config.js files
COPY . .

# Build the Next.js application
# The output is placed in the .next folder
RUN npm run build

# --- STAGE 2: Production Runtime ---
# Use a minimal production-ready Node.js image to serve the application
FROM node:20-slim AS runner

# Set environment variables for Next.js to run in production mode
ENV NODE_ENV production
# Set the port the application will listen on (Cloud Run default)
ENV PORT 8080

# Set the working directory
WORKDIR /app

# Only copy the essential files from the builder stage
# This keeps the final image lightweight and excludes build dependencies (like node_modules)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the application port
EXPOSE 8080

# Set the default command to start the Next.js server
# This command must be defined in your package.json scripts as 'start'
CMD ["npm", "start"]