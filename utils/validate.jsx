

export const validateUser = (username)=>{
    if(username==="")return false;
    const userRegex = /^[a-zA-Z0-9]+$/g;
    return userRegex.test(username); 
}

export const validatePassword = (password)=>{
    if(password==="")return false;
    const passwordRegex = /^(?=.*[^A-Za-z0-9\s])[^\s]{2,}$/g;
    return passwordRegex.test(password); 
}


const validate= (username,password)=>{
 
    const isValidUser = validateUser(username); //
    const isValidPassword =validatePassword(password); 
    let error = (!isValidUser && !isValidPassword) ? 12 : !isValidUser? 1:!isValidPassword?2: null;
    return error;
 }

 export default  validate;