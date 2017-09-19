FROM node:latest

EXPOSE 3000
EXPOSE 8080
EXPOSE 80

COPY ./ /var/www/test

WORKDIR /var/www/test

RUN npm install -g

CMD ["npm", "start"]