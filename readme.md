# Save File to Oracle Cloud Infrastructure Object Storage from Node through REST API

This repository contains an example of how to upload a file to Oracle Cloud Infrastructure from a Node application using the OCI REST APIs. In a very similar way, we can invoke other REST APIs for other OCI services.

You have to provide configuration details, including a private key file, your tenancy, user, compartment, public key fingerprint etc.

```
upload("myNewFile.json", { content: "My very very special Content", moreContent: "Something completely different", value: 34 })
```

Also read this blog article [Save File to Oracle Cloud Infrastructure Object Storage from Node through REST API](https://technology.amis.nl/2019/03/16/save-file-to-oracle-cloud-infrastructure-object-storage-from-node-through-rest-api/)

## Installing & Running

Clone this Repository

Run `npm install`

Run `node src/ociobjectstore/saveObject.js`


## Configure your Private Key file into the project
At one point, you have probably used `openssl genrsa` to generate a private key (protected wuth a passphrase) resulting in a `*.pem` file. Please copy this file into the project. In the next step, you have to set the location of this file in the configuration.js file - property privateKeyFile.


## Configure your environment parameters in confguration.js
File configuration.js contains all environment specific settings for your Cloud Tenancy, Compartment, User, Public Fingerprint and Private Key. Update this file with your own settings.


## Resources
Crucial resources:

[Fix for http-signature to wok with passphrase](https://github.com/joyent/node-http-signature/issues/81)

[GitHub Repo OCI-Rest-APIs-nodejs by Christopher Beck with foundation for invoking many OCI REST APIs from NodeJS - I have used crucial elements from this example](https://github.com/christopherbeck/OCI-Rest-APIs-nodejs)


[OCI Object Storage Service Documentation](https://docs.cloud.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm)