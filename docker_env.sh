export S3_UPLOAD_AWS_ACCESS_KEY=
export S3_UPLOAD_AWS_SECRET_KEY=
export S3_UPLOAD_BUCKET=
export S3_UPLOAD_REGION=eu-west-1
export S3_UPLOAD_DB_URL=mongodb://user:password@mongodb:27017/s3_uploader

env | grep S3_UPLOAD_ > .docker-env
