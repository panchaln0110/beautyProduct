var timer = null;
var i = 0;
function fnGetDate()
{
    var today = new Date();
    document.getElementById('time').innerHTML = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    timer = setTimeout("fnGetDate()" , 1000);
}
function fnGetData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "pages/guitar.json" , true);
    xhttp.send();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4 && xhttp.status === 200)
        {
            i = 0;
            var varJasonData = JSON.parse(xhttp.responseText);
            var obj = varJasonData.allProducts[i];
            document.getElementById("pimg").src = obj.image_path;
            document.getElementById("divDesc").innerHTML = "<b>Description : </b>" + obj.product_description;
            document.getElementById("divShipDtl").innerHTML = "<b>Shippng Details : </b>" + obj.shipping_details;
            document.getElementById("divCustRew").innerHTML = "<b>Customer Review : </b>" + obj.customer_reviews;
            document.getElementById("divPrice").innerHTML = "<b>Price : </b>" + obj.price;
            document.getElementById("divStockAval").innerHTML = "<b>Stock Availability : </b>" + obj.stock_availability;
            document.getElementById("divNoItems").innerHTML = "<b>Available Number of Quantity : </b>" + obj.no_of_items;
            document.getElementById('divHidden').innerHTML = i;
        }
    };
}
function fnCallBuyerDtl()
{
    window.location.href = 'pages/checkout.html?param=' + document.getElementById('divHidden').innerHTML;
}
function fngetDataChkOut()
{
    i = document.location.href.split('?')[1].split('=')[1];
    document.getElementById("divHiddenChkout").innerHTML = i;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "guitar.json" , true);
    xhttp.send();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4 && xhttp.status === 200)
        {
            var varJasonData = JSON.parse(xhttp.responseText);
            var obj = varJasonData.allProducts[i];
            document.getElementById("imgchkout").src ="../" + obj.image_path;
            document.getElementById("divDescChkOut").innerHTML = "<b>Description : </b>" + obj.product_description;
        }
    };
}
function fnCheckout()
{
    // Form Validation
    var varFname = document.getElementById("txtFname");
    var varLname = document.getElementById("txtLname");
    var varAddress = document.getElementById("txtAdd");
    var varState = document.getElementById("cmbState");
    var varZipCode = document.getElementById("txtZipCode");
    var varGenMale = document.getElementById("rdoGenMale");
    var varGenFemale = document.getElementById("rdoGenFemale");
    var varCardNo = document.getElementById("txtcardno");
    var varMonth = document.getElementById("txtmonth");
    var varYear = document.getElementById("txtyear");
    var varCVV = document.getElementById("txtcvv");
    if (validLetters(varFname , "First name" , ""))
    {
        if (validLetters(varLname , "Last name" , ""))
        {
            if (validAddress(varAddress , 'Address' , ""))
            {
                if (validDropDown(varState , "State" , ""))
                {
                    if (validDigits(varZipCode , "Zip Code" , ""))
                    {
                        if (validGender(varGenMale , varGenFemale , "Gender" , ""))
                        {
                            if (validDigits(varCardNo , "Card Number" , ""))
                            {
                                if (validDigits(varMonth , "Month" , ""))
                                {
                                    if (parseInt(varMonth.value) <= 0 || parseInt(varMonth.value) > 12)
                                    {
                                        alert("Please enter  valid value for 'Month'.");
                                        return false;
                                    }
                                    if (validDigits(varYear , "Year" , ""))
                                    {
                                        if (parseInt(varYear.value) < 17)
                                        {
                                            alert("Please enter  valid value for 'Year'.");
                                            return false;
                                        }
                                        if (validDigits(varCVV , "CVV" , ""))
                                        {
                                            localStorage.setItem("Fname" , varFname.value);
                                            localStorage.setItem("Lname" , varLname.value);
                                            window.location.href = 'orderconfirm.html?param=' + document.getElementById('divHiddenChkout').innerHTML;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function fngetOrderCnfm()
{
    document.getElementById("divPDtl").innerHTML = localStorage.getItem('Fname') + " " + localStorage.getItem('Lname') + "!!!!";
    i = document.location.href.split('?')[1].split('=')[1];
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "guitar.json" , true);
    xhttp.send();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4 && xhttp.status === 200)
        {
            var varJasonData = JSON.parse(xhttp.responseText);
            var obj = varJasonData.allProducts[i];
            document.getElementById("imgOrdrCnfm").src = "../" + obj.image_path;
            document.getElementById("divOrdrCnfm").innerHTML = "<b>Description : </b>" + obj.product_description;
        }
    };
}
function fnGetPrevData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "pages/guitar.json" , true);
    xhttp.send();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4 && xhttp.status === 200)
        {
            var varJasonData = JSON.parse(xhttp.responseText);
            console.log("i : " + i);
            if (i === 0)
            {
                i = varJasonData.allProducts.length;
            }
            i --;
            var obj = varJasonData.allProducts[i];
            document.getElementById("pimg").src = obj.image_path;
            document.getElementById("divDesc").innerHTML = "<b>Description : </b>" + obj.product_description;
            document.getElementById("divShipDtl").innerHTML = "<b>Shippng Details : </b>" + obj.shipping_details;
            document.getElementById("divCustRew").innerHTML = "<b>Customer Review : </b>" + obj.customer_reviews;
            document.getElementById("divPrice").innerHTML = "<b>Price : </b>" + obj.price;
            document.getElementById("divStockAval").innerHTML = "<b>Stock Availability : </b>" + obj.stock_availability;
            document.getElementById("divNoItems").innerHTML = "<b>Available Number of Quantity : </b>" + obj.no_of_items;
            document.getElementById('divHidden').innerHTML = i;
            console.log("i a : " + i);
        }
    };
}
function fnGetNextData()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET" , "pages/guitar.json" , true);
    xhttp.send();
    xhttp.onreadystatechange = function ()
    {
        if (xhttp.readyState === 4 && xhttp.status === 200)
        {
            var varJasonData = JSON.parse(xhttp.responseText);
            i ++;
            if (varJasonData.allProducts.length === i)
            {
                i = 0;
            }
            var obj = varJasonData.allProducts[i];
            document.getElementById("pimg").src = obj.image_path;
            document.getElementById("divDesc").innerHTML = "<b>Description : </b>" + obj.product_description;
            document.getElementById("divShipDtl").innerHTML = "<b>Shippng Details : </b>" + obj.shipping_details;
            document.getElementById("divCustRew").innerHTML = "<b>Customer Review : </b>" + obj.customer_reviews;
            document.getElementById("divPrice").innerHTML = "<b>Price : </b>" + obj.price;
            document.getElementById("divStockAval").innerHTML = "<b>Stock Availability : </b>" + obj.stock_availability;
            document.getElementById("divNoItems").innerHTML = "<b>Available Number of Quantity : </b>" + obj.no_of_items;
            document.getElementById('divHidden').innerHTML = i;
        }
    };
}