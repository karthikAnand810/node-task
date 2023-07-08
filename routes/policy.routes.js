const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policy.controller');
const upload = require('../middleware/multer');

// Create a new policy
router.post('/create ', policyController.createPolicy);

// 
router.post('/upload', upload.single('file'), policyController.uploadPolicy)

// Get all policies
router.get('/', policyController.getAllPolicies);

// Get a policy by ID
router.get('/:id', policyController.getPolicyById);

// Update a policy by ID
router.put('/update/:id', policyController.updatePolicy);

// Delete a policy by ID
router.delete('/delete/:id', policyController.deletePolicy);



module.exports = router;
