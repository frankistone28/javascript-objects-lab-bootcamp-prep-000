var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
    //return object = Object.assign(object,{key : value});
    return Object.assign({},object,{[key] : value});
}
