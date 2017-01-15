// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JackGrence
// @match        http://npj.kuas.edu.tw/Std/QuestionnaireInsert.aspx*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //setTimeout( abc, 2000 );
    $(document).ready( function()
    {
        if( $("input[name='ButtonNextPart']").length !== 0 )
        {
            document.getElementById("ButtonNextPart").addEventListener("click", setFirstCookie);
            first();
        }
        if( $("input[name='ButtonPrepart']").length !== 0 )
        {
            document.getElementById("ButtonPrepart").addEventListener("click", setSecondCookie);
            document.getElementById("Button1").addEventListener("click", setSecondCookie);
            second();
        }
    });
})();

function first()
{
    var btnList = getCookie("first").split("&");
    var i;
    for( i = 0; i < btnList.length; i++ )
    {
        $("#" + btnList[i]).click();
    }
}

function second()
{
    var btnList = getCookie("second").split("&");
    for( var i in btnList )
    {
        $("#" + btnList[i]).click();
    }
}

function setFirstCookie()
{
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var radioAry = $(":radio");
    var str = '';
    for( var i in radioAry )
    {
        if( radioAry[i].checked === true )
        {
            str += radioAry[i].id + "&";
        }
    }
    document.cookie = "first=" + str + ";" + expires + ";path=/";
}

function setSecondCookie()
{
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    var radioAry = $(":radio");
    var str = '';
    for( var i in radioAry )
    {
        if( radioAry[i].checked === true )
        {
            str += radioAry[i].id + "&";
        }
    }
    document.cookie = "second=" + str + ";" + expires + ";path=/";
}


function getCookie( name )
{
    var cook = document.cookie;
    var cookAry = cook.split("; ");
    for( var i in cookAry )
    {
        if( cookAry[i].indexOf( name + "=" ) !== -1 )
        {
            return cookAry[i].substr( cookAry[i].indexOf("=") + 1 );
        }
    }
    return "";
}