var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    //return object = Object.assign(object,{key : value});
    var obj = object[key] = value;
    return obj;
}
