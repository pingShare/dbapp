export function setCookie(name,value,expire){
    var date = new date();
    document.cookie = name+"="+value+";expire="+expire;
}