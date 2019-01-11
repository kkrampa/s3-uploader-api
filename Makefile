env-dev-build-image:
	docker build -t s3-uploader-api .

env-dev-dep-install:
	yarn install

env-dev-runserver:
	npm start

env-prod-runvserver:
	node server.js