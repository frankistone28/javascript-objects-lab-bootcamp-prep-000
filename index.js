var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    //return object = Object.assign(object,{key : value});
    Object.assign({},object,{[key] : value});
    return obj;
}
