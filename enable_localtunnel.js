const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "uniquesubasd" }, (err, tunnel) => {
    console.log("LT is running");
});