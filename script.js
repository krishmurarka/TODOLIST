//Select Elements
const clear=document.querySelector(".clear");
const dateElement= document.getElementById("date");
const list=document.getElementById("list");
const input=document.getElementById("input");
var check=document.getElementsByClassName("debugg");
var trash=document.getElementsByClassName("t-trash");
var loal=document.getElementsByClassName("list-group-item");
//Date
const options ={weekday : "long" , month:"short", day:"numeric"};
const today=new Date();
dateElement.innerText=today.toLocaleDateString("en",options);



var id=0;

//ADD TODO LIST 
function addToDo(e)
{
    const item=`
   
    <li class="list-group-item" id="${id}">
    <div class="debugg a-check yoyo" id="a${id}">
    <button class="checking">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" ><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
    </svg>
    </button>
    <span id="text">
    ${e}
    </span>
    </div>
    <div class="t-trash">
    <button class="trash">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
    </button>
    </div>
    </li>   
    `;
    const position="beforeend";
    list.insertAdjacentHTML(position,item);
    id++;
}
// CALLIING TODO LIST 


document.addEventListener('keyup',function(e){
    if(e.keyCode==13)
    {
        const todo=input.value;
       if(todo!="")
       {
           addToDo(todo);
           input.value="";
           check=document.getElementsByClassName("debugg");



           // CHECK AND CHECK HANDLING 



            check[id-1].addEventListener('click',function(){
                for(var j=0;j<id;j++)
                    {
                        if(j==this.parentNode.id)
                        {
                            
                        var div=document.getElementById(`a${j}`);
                        var x=div.className.split(" "); 
                        var initial_Text=div.innerText;
                        // if length of x is 3 it means that our task is unchecked
                        if(x.length==3)
                        { 
                            var codeblock='  <button class="checking"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="green"><path fill-rule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"></path></svg></button>'+
                            `<s id="light">${initial_Text}<s>`;
                            
                            
                                div.innerHTML=codeblock;
                            
                        }else{
                            // means our task was already checked
                                var codeblock='<button class="checking"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path></svg></button>'+
                                `<span id="text">${initial_Text}</span>`;
                                
                                
                                div.innerHTML=codeblock;
                            
                        }
                        div.classList.toggle("yoyo");
                       
                
                        }
                    }
    
                        });



            //   TRASH ICON HANDLING

            trash[id-1].addEventListener('click',function(){
                        for(var j=0;j<id;j++)
                        {
                            if(j==this.parentNode.id)
                                {
                                    document.getElementById(`${j}`).remove();
                                    for(var k=j+1;k<id;k++)
                                    {

                                        document.getElementById(`${k}`).id =`${k-1}`;
                                        document.getElementById(`a${k}`).id=`a${k-1}`;

                                    }
                                        
                                    id--;
                                }
                         }
            });
        }
        console.log(list);
        window.localStorage.setItem('user', JSON.stringify(list));
        console.log((window.localStorage.getItem('user')));
    }
        
    
   
    
});
 