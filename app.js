    
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

        let scrollHeight = Math.max(document.documentElement.offsetHeight,document.documentElement.scrollHeight, document.documentElement.clientHeight, document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
        // console.log(scrollHeight)
        
        setInterval(()=>{
          
        var scrollPos = window.pageYOffset;
        // console.log(scrollPos) 
        
        if(scrollPos > 3766){
          document.querySelector('.scroll_top').style.display = 'block';
        }else{
          document.querySelector('.scroll_top').style.display = 'none'
        }
        }, 100)
        
        document.querySelector('.scroll_top').addEventListener('click', ()=>{
          window.scrollTo(0,0)
        })


 

   
