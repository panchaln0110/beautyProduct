/*
 onlyDigits : Validation for Only numeric values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validDigits(paraValue , caption , customMsg)
{
    var pattern = /^[0-9]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter digits only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 allLetters : Validation for Only Letters values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validLetters(paraValue , caption , customMsg)
{
    var pattern = /^[A-Za-z]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter alphabet characters only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 alphanumeric : Validation for Alpha Numeric values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validAlphaNumeric(paraValue , caption , customMsg)
{
    var pattern = /^[0-9a-zA-Z]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter alphabet characters only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 ValidateEmail : Validation for Email Address.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function ValidEmail(paraValue , caption , customMsg)
{
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter valid value for '" + caption + "'");
        }
        paraValue.focus();
        return false;
    }
}
/*
 validGender : Validation for Radio buttons for Male or Female.
 rdoId1 : pass Id of First Radio Button
 rdoId2 : pass Id of Second Radio Button
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validGender(rdoId1 , rdoId2 , caption , customMsg)
{
    if (rdoId1.checked === true || rdoId2.checked === true)
    {
        return true;
    }
    if (customMsg.trim().length > 0)
    {
        alert(customMsg);
    }
    else
    {
        alert("Please make selection for '" + caption + "'.");
    }
    rdoId1.focus();
    return false;
}
/*
 validAddress : Validation for Address values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 values allowed for Address is : alphanumeric characters and blank space.
 */
function validAddress(paraValue , caption , customMsg)
{
    var pattern = /^[A-Za-z\d\s]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter alphabet characters and blank space only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 validDropDown : Validation for Drop Down box.
 paraValue : pass id of Drop Down Box.
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 values allowed for Address is : alphanumeric characters and blank space.
 */
function validDropDown(paraValue , caption , customMsg)
{
    if (paraValue.selectedIndex === 0)
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please make selection for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
    else
    {
        return true;
    }
}