FROM node:11.5-alpine

WORKDIR /app
COPY . /app

RUN apk add --update make
RUN yarn install

EXPOSE 3000

CMD make env-prod-runvserver
