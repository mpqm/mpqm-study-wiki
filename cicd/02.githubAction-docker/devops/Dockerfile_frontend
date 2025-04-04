FROM  nginx:latest
EXPOSE 80
ARG DIST_DIR
COPY ${DIST_DIR} /usr/share/nginx/html
CMD   nginx -g "daemon off;"