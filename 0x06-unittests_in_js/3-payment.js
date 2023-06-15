const { util } = require("chai");

const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${res}`);
    return res;
}

module.exports = sendPaymentRequestToApi;