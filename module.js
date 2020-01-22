function isSameLen(str,len){
    if(str.length===len){
        return true; 
    }else{
        return false;
    }
} 

function isLowerThanLen(str,len){
    if(str.length<len){
        return true;
    }else{
        return false;
    }
}

function isHigherThanLen(str,len){
    if(str.length>len){
        return true;
    }else{
        return false;
    }
}

//regExp의 i flag는 대소문자 구분을 하지 않음을 의미함
function isAlphanumeric(str){
    const regExp=/^[a-z0-9]+$/i;
    const result=regExp.test(str);
    return result;
}

function isEmailFormat(str){

}

//단, 두 인자 모두 객체일 때는 상세한 객체 타입을 읽을 수 없기 때문에 사용 불가능
function isSameType(x,y){
    if(typeof x===typeof y){
        return true;
    }else{
        return false;
    }
}

function jsonPost(url){

}

function jsonGet(url){

}

function setErrorPage(codeSet,compSet){
    
    /*
        주로 400,404,500,501 Error가 빈번하게 발생함
    */
}