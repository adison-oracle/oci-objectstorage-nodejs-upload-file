
var fs = require('fs');
var objectStore = require('./services/objectStore.js');
const configs = require('./configuration');
const configuration = configs.configs;

var auth = {
    tenancyId: configuration.tenancyId,
    userId: configuration.userId,
    keyFingerprint: configuration.keyFingerprint,
    RESTversion: configuration.RESTversion,
    region: configuration.region
};
auth.privateKey = fs.readFileSync(configuration.privateKeyFile, 'ascii');
auth.passphrase = configuration.passphrase
// set up parameters object
//
var parameters = {
    compartmentId: configuration.compartmentId
};
var callback = function (data) {
    console.log(JSON.stringify(data))
};

async function upload(objectName, content) {
    console.log(`upload to ${objectName}, content: ${content}`);
    auth.RESTversion = '/20160918';
    parameters = {
        objectName: objectName,
        namespaceName: configuration.namespaceName,
        bucketName: configuration.bucketName,
        body: content
    };
    objectStore.obj.put(auth, parameters, callback);
}

async function uploadJSON(objectName, json) {
    return upload(objectName, JSON.stringify(json));
}

module.exports = {
    upload,
    uploadJSON
}

// test call
uploadJSON("BrandNewFile.json", { content: "My very very special Content", moreContent: "Something completely different", value: 34 })
