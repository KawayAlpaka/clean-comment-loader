
const loaderUtils = require("loader-utils");
module.exports = function(source,map){
    // let options = loaderUtils.getOptions(this);
    let s = source.replace(/<!--[\s\S]*?-->/gm,"");
    let result = JSON.stringify(s);
    return s;
}