const express = require('express');
const app = express();
const S3 = require('aws-sdk/clients/s3');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const port = 3000;
const bucketName = process.env.S3_UPLOAD_BUCKET;

const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.S3_UPLOAD_AWS_ACCESS_KEY,
    secretAccessKey: process.env.S3_UPLOAD_AWS_SECRET_KEY,
    signatureVersion: 'v4',
    region: process.env.S3_UPLOAD_REGION,
});


app.get('/init-upload', (req, res) => {
    const params = { Bucket: bucketName, Key: req.query.fileName };
    s3.createMultipartUpload(params, (err, data) => {
        if (err) {
            res.send(500, 'ERROR');
            return;
        }
        res.send({ uploadId: data.UploadId });
    });
});

app.get('/get-multipart-url', (req, res) => {
    const params = {
        Bucket: bucketName,
        Key: req.query.fileName,
        PartNumber: req.query.part || 1,
        UploadId: req.query.uploadId,

    };
    s3.getSignedUrl('uploadPart', params, (err, url) => {
        if (err) {
            res.send(500, 'ERROR');
            return;
        }
        res.send({ url });
    });
});

app.post('/complete-upload', (req, res) => {
    
    let params = {
        Bucket: bucketName,
        Key: req.body.fileName,
        MultipartUpload: {
            Parts: req.body.parts
        },
        UploadId: req.body.uploadId
    }
    s3.completeMultipartUpload(params, (err) => {
        if (err) {
            res.send(500, 'ERROR');
            return;
        }
        res.send('OK');
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
