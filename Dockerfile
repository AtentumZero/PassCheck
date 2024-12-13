FROM nginx:alpine

#  Install app
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./src /usr/share/nginx/html