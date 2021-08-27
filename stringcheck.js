function value(str){
    return (str.substring(0,2) == "Py") ? (str) : ("Py" + str);
}

console.log(value("Python"));
console.log(value("Thor"));