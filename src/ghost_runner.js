/*
This file is part of the GhostRunner project by Aravinda Meewalaarachchi.

Copyright (C) 2016 Aravinda Meewalaarachchi <aravinda.mailbox@gmail.com>
Licensed under the MIT License, Permission is hereby granted, free of charge,
to any person obtaining a copyof this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

*/


//this function will perform a click event on given DOM object
function runnerClick( domObject,  value){
try{
  switch (domObject) {
    case "id"    : document.getElementById(value).click();
                   console.log("status pass : button clicked ",domObject,value);
                   break;
    case "class" : document.getElementsByClassName(value).click();
                   console.log("status pass : button clicked",domObject,value);
                   break;
    case "xpath" : var iterator = document.evaluate( value,
                   document, null, XPathResult.ANY_TYPE, null );
                   try {
                      var thisNode = iterator.iterateNext();
                      thisNode.click();
                   }
                   catch (e) {
                      console.log( 'Error: Document tree modified during iteration ' + e );
                   }
                   console.log("status pass : button clicked",domObject,value);
                   break;
    case "css"   : document.getElementById(value).click();//ToDo-must impliment
                   console.log("status pass : button clicked",domObject,value);
                   break;
    case "tag"   : document.getElementById(value).click();//ToDo-much more detailed implimentation
                   console.log("status pass : button clicked",domObject,value);
                   break;
    default      : console.log("status fail : domObject type not supported");
}
}catch(err){
  console.log(err);
}
}

function runnerType(domObject, value, text){
  try{
    switch (domObject) {
      case "id"    : document.getElementById(value).value = text;
                     console.log("status pass : string "+ text +" typed on.",domObject,value);
                     break;
      case "class" : document.getElementsByClassName(value).value = text;
                     console.log("status pass : string "+text+" typed on.",domObject,value);
                     break;
      case "xpath" : var iterator = document.evaluate( value,
                     document, null, XPathResult.ANY_TYPE, null );
                     try {
                        var thisNode = iterator.iterateNext();
                        thisNode.value = text;
                     }
                     catch (e) {
                        console.log( 'Error: Document tree modified during iteration ' + e );
                     }
                     console.log("status pass : string "+text+" typed on.",domObject,value);
                     break;
      case "css"   : document.getElementById(value).value = text;
                     console.log("status pass : string "+text+" typed on.",domObject,value);
                     break;
      case "tag"   : document.getElementById(value).value = text;
                     console.log("status pass : string "+text+" typed on.",domObject,value);
      default      : console.log("status fail : domObject type not supported");
  }
  }catch(err){
    console.log(err);
  }
}

//this function will wait until given specific time (miliseconds)
function wait(time){
  try{
  var e = new Date().getTime() + time;
  while (new Date().getTime() <= e) {}
}catch(err){
  console.log(err);
}
}

//Function will inspect the given dom element and notify that element is present
//or not in side the page

function isElementPresent(domObject, value){
  try{
    switch (domObject) {
      case "id"    : var present = document.getElementById(value);
                     return check(present);
                     break;
      case "class" : var present = document.getElementsByClassName(value);
                     return check(present);
                     break;
      case "xpath" : var present = document.getElementById(value);//toDo-must impliment
                     return check(present);
                     break;
      case "css"   : var present = document.getElementById(value);//ToDo-must impliment
                     return check(present);
                     break;
      case "tag"   : var present = document.getElementById(value);//ToDo-much more detailed implimentation
                     return check(present);
                     break;
      default      : console.log("status fail : domObject type not supported");
                     return false;
  }
  }catch(err){
    console.log(err);
  }
  function check(present){
    if(present!= null){
         console.log("status pass : Element present",domObject,value);
         return true;
     }
    else {
      console.log("status fail : Element not present ",domObject,value);
      return false;
    }
  }

}

//This function will handle the browser navigations

function navagateTo(url){
  try{
    window.location.href=url;
    console.log("status pass : Navigated to " + url);
  }catch(err){
    console.log("status fail : Broken link  or no network connection");
  }
}

//This function will navigate one step back from current position in recent history
function navigateBack(){
  try{
    window.history.back();
    console.log("status pass : Navigated one step back from current position in recent history" + url);
  }catch(err){
    console.log("status fail : Broken link  or no network connection");
  }
}
