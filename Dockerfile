FROM node:11.5-alpine

WORKDIR /app
COPY . /app
RUN yarn install

EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["index.js"]
