const multer = require('multer');

// Set up Multer storage destination and filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

// Create Multer instance
const upload = multer({ storage });

module.exports = upload;
