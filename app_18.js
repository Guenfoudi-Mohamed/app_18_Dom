// app_18

const items =  document.querySelectorAll('body #header .navbar nav .list li .item');
const sections =  document.querySelectorAll('body main section');
const header =  document.querySelector('body #header');
for(let i = 0;i<items.length;i++){
    items[i].addEventListener('click',function(e){
        e.preventDefault();
        console.log(this.getAttribute('href'));
        window.scrollTo(0,(sections[i].offsetTop - header.offsetHeight));
    });
};
