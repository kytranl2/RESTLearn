# Using buildx syntax for new Dockerfile features
# syntax=docker/dockerfile:1.0.0-experimental

# 1. Base image specifying build platform
FROM --platform=$BUILDPLATFORM node:14 as builder

# Set ARGs for platforms
ARG TARGETPLATFORM
ARG BUILDPLATFORM

# 2. Set up working directory
WORKDIR /app

# 3. Copy application files
COPY . .

# 4. Install dependencies
RUN npm install

# 5. Expose port, main role of `EXPOSE` is for documentation
EXPOSE 3000

# For displaying which platform this was built on (Optional Debugging Step)
RUN echo "I am running on $BUILDPLATFORM, building for $TARGETPLATFORM" > /platform.txt

# 6. Start the application
CMD ["node", "middlewareDemo.js"]