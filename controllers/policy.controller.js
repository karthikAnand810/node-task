const Agent = require('../models/agent.model');
const User = require('../models/user.model');
const Account = require('../models/user_account.model');
const LOB = require('../models/lob.model');
const Carrier = require('../models/carrier.model');
const Policy = require('../models/policy.model');
const xlsx = require('xlsx');
const csvParser = require('csv-parser');
const fs = require('fs')
// Create a new policy
exports.createPolicy = async (req, res) => {
    try {
        const payload = req.body;
        const policy = await Policy.create(payload);
        res.status(201).json({ policy });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all policies
exports.getAllPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        res.status(200).json({ policies });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a policy by ID
exports.getPolicyById = async (req, res) => {
    try {
        const { id } = req.params;
        const policy = await Policy.findById(id);
        res.status(200).json({ policy });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Update a policy by ID
exports.updatePolicy = async (req, res) => {
    try {
        const updateData = req.body;
        const { id } = req.params;
        const policy = await Policy.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ policy });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a policy by ID
exports.deletePolicy = async (req, res) => {
    try {
        const { id } = req.params;
        await Policy.findByIdAndDelete(id);
        res.status(204).json({ message: 'Deleted Successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.uploadPolicy = async (req, res) => {
    try {
        const file = req.file; // Assuming the uploaded file is available in the 'file' property of the request object

        // Parse the file based on its extension (XLSX or CSV)
        let data;
        if (file.originalname.endsWith('.xlsx')) {
            const workbook = xlsx.read(file.buffer, { type: 'buffer' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
        } else if (file.originalname.endsWith('.csv')) {
            data = [];
            await new Promise((resolve, reject) => {
                const stream = fs.createReadStream(file.path)
                stream
                    .pipe(csvParser())
                    .on('data', (row) => data.push(row))
                    .on('error', reject)
                    .on('end', () => {
                        fs.unlink(file.path, (err) => {
                            if (err) {
                                console.error('Error deleting file:', err);
                            }
                        });
                        resolve();
                    });
            });
        } else {
            throw new Error('Unsupported file format');
        }

        // Process and save the data to the corresponding collections
        for (const row of data.slice(1)) {
            const agent = new Agent({
                name: row.agent,
                email: row.email,
                phone: row.phone,
                address: row.address,
                // Map other agent attributes to their respective fields
            });
            await agent.save();

            const user = new User({
                // Map user attributes to their respective fields
                userType: row.userType,
                email: row.email,
                gender: row.gender,
                firstname: row.firstname,
                city: row.city,
            });
            await user.save();
            const account = new Account({
                account_name: row.account_name,
                email: row.email,
                account_type: row.account_type,
                phone: row.phone,
                address: row.address,
                state: row.state,
                zip: row.zip,
                dob: new Date(row.dob),
                // Map account attributes to their respective fields
            });
            await account.save();

            const lob = new LOB({
                company_name: row.company_name,
                category_name: row.category_name,
                // Map account attributes to their respective fields
            });
            await lob.save();

            const carrier = new Carrier({
                name: row.producer,
                // Map account attributes to their respective fields
            });
            await carrier.save();

            const policy = new Policy({
                policy_mode: parseInt(row.policy_mode),
                policy_number: row.policy_number,
                premium_amount_written: row.premium_amount_written,
                premium_amount: parseFloat(row.premium_amount),
                policy_type: row.policy_type,
                policy_start_date: new Date(row.policy_start_date),
                policy_end_date: new Date(row.policy_end_date),
                csr: row.csr,
                agent: agent._id,
                user: user._id,
                account: account._id,
                lob: lob._id,
                carrier: carrier._id,
                hasActiveClientPolicy: row.hasActiveClientPolicy === 'true'
                // Map account attributes to their respective fields
            });
            await policy.save();
            // Repeat the above steps for LOB, Carrier, and Policy collections
        }

        res.status(200).json({ message: 'Data uploaded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}