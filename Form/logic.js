window.onload= function()
{
    document.getElementById("submit").onclick=validateFields;
}

function validateFields()
{
    var passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
    var isValidpassword=document.getElementById("password").value.match(passwordRegex);

    var urlRegex= /((http||https):\/\/\w{1,})$/;
    var isValidUrl=document.getElementById("url").value.match(urlRegex);

    if(!isValidUrl && !isValidpassword)
    {
        alert("Password and URL are Invalid");
        return false;
    }
    else if(isValidUrl && !isValidpassword)
    {
        alert("Invalid Password");
        return true;
    }
    else if(isValidUrl && !isValidpassword)
    {
        alert("Invalid Password");
        return false;
    }
    if(!isValidUrl && isValidpassword)
    {
        alert("Invalid URL");
        return false;
    }
    else
    {
        alert("Password and URL are valid");
        return true;
    }   
       
}