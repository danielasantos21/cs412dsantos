var num = 0; // global variable
// var s; // current style

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var s = document.getElementById("mainstyle"); 

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var cur =  s.getAttribute("href"); 

    var newFile = "style/home.css";
    if(cur != "style2/home.css"){
        newFile = "style2/home.css";
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    s.setAttribute("href", newFile);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheet", newFile);

}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var stylename = localStorage.getItem("stylesheet");

    // 2 (b) get html style element by ID
    var a = document.getElementById("mainstyle");

    // 2 (c) replace href attribute of html element.
    a.setAttribute("href", stylename);
    
}

// function keepStyle(){
//     // Task 1
//     // Steps
//     // 1 (a) Get style element by ID (hint: getElementById)
//     var s = document.getElementById("mainstyle"); 

//     // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
//     var cur =  s.getAttribute("href"); 

//     var newFile = "style/home.css";
//     if(cur != "style2/home.css"){
//         newFile = "style2/home.css";
//     }

//     // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
//     s.setAttribute("href", newFile);


//     // TASK 2
//     // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
//     // hint: localStorage.setItem(name, value)
//     localStorage.setItem("stylesheet", newFile);

// }


