
(function(){
    document.querySelector('.hamburger').addEventListener('click',() =>{
        document.querySelector('.nav-bar').classList.toggle('open');
    });
        
        //nav bar
        var list = document.getElementsByClassName('nav-link');
        // console.log(list)
        
        for(var i = 0; i < list.length; i++){
            list[i].addEventListener('click',()=>{
                document.querySelector('.nav-bar').classList.remove('open');

            });
        }
})();

 

   
