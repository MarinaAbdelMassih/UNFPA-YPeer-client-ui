FROM nginx
RUN mkdir /usr/share/nginx/y-peer
RUN mkdir /etc/nginx/ssl
COPY ./dist/index.html /usr/share/nginx/y-peer
COPY ./ssl/cert /etc/nginx/ssl
COPY nginx.conf /etc/nginx/nginx.conf
COPY y-peer.conf /etc/nginx/conf.d
ENV PORT 443
EXPOSE $PORT