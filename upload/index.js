const S3 = require('aws-sdk/clients/s3');

module.exports = new S3({
  apiVersion: '2006-03-01',
  accessKeyId: process.env.S3_UPLOAD_AWS_ACCESS_KEY,
  secretAccessKey: process.env.S3_UPLOAD_AWS_SECRET_KEY,
  signatureVersion: 'v4',
  region: process.env.S3_UPLOAD_REGION,
});
