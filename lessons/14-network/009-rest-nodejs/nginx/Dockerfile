FROM nginx:1.16.0-alpine
# COPY --from=build /usr/src/app/public /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
EXPOSE 81
EXPOSE 82
CMD ["nginx", "-g", "daemon off;"]
