const express = require('express');
const app = express();
const userRoutes = require('./user.routes');
const accountRoutes = require('./user_account.routes');
const policyRoutes = require('./policy.routes');

app.use('/users', userRoutes);
app.use('/accounts', accountRoutes);
app.use('/policies', policyRoutes);

module.exports = app;
