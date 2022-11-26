const  multer = require('multer');

const {S3Client, PutObjectCommand, GetObjectCommand} = require('@aws-sdk/client-s3');
const crypto = require('crypto');

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const bucket_Name  = process.env.BUCKET_NAME  
const bucket_Region = process.env.BUCKET_REGION
const access_Key = process.env.ACCESS_KEY
const secret_Access_key = process.env.SECRET_ACCESS_KEY

const uniqueFileName = (originalName) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
    return `${uniqueSuffix}-${originalName}`
}

const s3 = new S3Client({
    
    credentials: {
        accessKeyId: access_Key,
        secretAccessKey: secret_Access_key
    },
    region: bucket_Region,
});



exports.uploadImage = async (req, res) => {
    console.log(req.file);
      filename = uniqueFileName(req.file.originalname)
    const params = {
        Bucket: bucket_Name,
        Key: filename,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
    }
    const command = new PutObjectCommand(params);
    await s3.send(command);
    res.status(200).send({
        status:200,
        message: "Image uploaded successfully",
        img_id:filename
    });
}



exports.fetchImage = async (req, res) => {
    const id = req.query.image_id;
    const params = {
        Bucket: bucket_Name,
        Key: id
    }
    
    const command = new GetObjectCommand(params);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
    res.send({url: url});
}   