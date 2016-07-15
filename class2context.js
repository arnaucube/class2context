/* class2context.js
creator: Arnau
July 2016
version: v0.1


usage:
class2context(
  'className',
  "title",
  [["option1", "functionoption1()"], ["option 2","functionoption2()"]]
);
*/




//creates the div where the context menus will place
document.body.innerHTML+="<div id='contextMenus'></div>";
//

function class2context(classgiv, title, options){
    classgiv=JSON.parse(JSON.stringify(classgiv));
    if(document.getElementById("context"+classgiv))
    {
        //toastr.success("alreadyExist");
    }else{
        var aux="";
        aux+="<div id='context"+classgiv+"' class='contextMenu'>";
        aux+="  <ul class='c2c-dropdown c2c-border' style='display:block;position:static;margin-bottom:5px;'>";
        aux+="<div class='contextTitle'>" + title + "</div>";
        for(var i=0; i<options.length; i++)
        {
            //aux+="    <a onmousedown='"+options[i][1]+";' href='javascript:void(0);'>"+options[i][0]+"</a>";
            aux+="    <a onmousedown='"+options[i][1]+"; ContextMenus();' href='javascript:void(0);'>"+options[i][0]+"</a>";

        }
        aux+="  </ul>";
        aux+="</div>";
        document.getElementById('contextMenus').innerHTML+=aux; //adds the div context menu into the context menus div place
    }

    for(var i=0; i<document.getElementsByClassName(classgiv).length; i++)
    {
        classgiv=JSON.parse(JSON.stringify(classgiv));
        //toastr.info(document.getElementsByClassName(classgiv)[i].oncontextmenu);
        document.getElementsByClassName(classgiv)[i].addEventListener("contextmenu", function(e){
            // Avoid the real one
            e.preventDefault();
            e.stopPropagation();
            setTimeout(function(){
                //classaux=this.className.split(" ")[0];
                document.getElementById('context'+classgiv).style.display='block';
                document.getElementById('context'+classgiv).style.left=e.pageX + "px";
                document.getElementById('context'+classgiv).style.top=e.pageY + "px";
            }, 150);
        });

        /*document.getElementsByClassName(classgiv)[i].oncontextmenu+= function(e){
            // Avoid the real one
            e.preventDefault();
            setTimeout(function(){
                //classaux=this.className.split(" ")[0];
                document.getElementById('context'+classgiv).style.display='block';
                document.getElementById('context'+classgiv).style.left=e.pageX + "px";
                document.getElementById('context'+classgiv).style.top=e.pageY + "px";
            }, 150);
        };*/
    }

    document.body.addEventListener("mousedown", function(e){
        // Avoid the real one
        //e.preventDefault();
        if(document.getElementById('context'+classgiv))
        {
            setTimeout(function(){
                document.getElementById('context'+classgiv).style.display='none';
            }, 70);
            //ContextMenus();

        }
        return false;
    }, false);

}
