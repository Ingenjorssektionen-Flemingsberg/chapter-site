FROM oven/bun:1-debian AS build

WORKDIR /app

COPY package.json bun.lock ./

# Install dependencies
RUN bun install

# Environment variables
ENV VITE_GOOGLE_CALENDAR_API_URL="{{__GOOGLE_CALENDAR_API_URL__}}"
ENV VITE_GOOGLE_CALENDAR_API_KEY="{{__GOOGLE_CALENDAR_API_KEY__}}"
ENV VITE_GOOGLE_CALENDAR_ID="{{__GOOGLE_CALENDAR_ID__}}"

# Copy the rest of your application files to the container
COPY . .

RUN rm -f .env.development

RUN bun run build

# Step 7: Set up a new stage for serving the app (use a lightweight web server)
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./docker-entrypoint.sh .
RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "/docker-entrypoint.sh" ]