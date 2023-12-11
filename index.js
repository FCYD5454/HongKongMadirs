const button = document.getElementById('btn');
const upft = document.getElementById('upft');
const logo = document.getElementById('pofit-logo');  
const body = document.getElementById('body');  

    //if (localStorage.getItem('username')===localStorage.getItem('hideButton')) {
   //   button.style.display = 'none';
   // }else{
   //    upft.style.display = 'none';
   // };
const Logout = document.getElementById("Logout");
Logout.addEventListener("click", ()=>{
  sessionStorage.setItem('LoggedIn', 'false');
  window.location.href="index.html";
}
)  

let checkuSn = sessionStorage.getItem('LoggedIn');
  if(checkuSn=='false'|| checkuSn== 'null'){
    upft.style.display= 'none';
    button.style.display = 'block';
    logo.style.display='none';
  }else{
    button.style.display = 'none';
    logo.style.display='block';

  }

function islogo(){
  if(upft.style.display === 'none') {
    upft.style.display = 'block';
  }else{
    upft.style.display = 'none';
   
  }
}

logo.addEventListener('click', islogo);

const searchInput = document.getElementById('searchInput');
const deleteButton = document.getElementById('deleteButton');
const container = document.querySelector('.container');

searchInput.addEventListener('input', ()=>{
  const cssItems = container.getElementsByClassName("css");
  var i;
  for(i=0; i< cssItems.length; i++){
    const movies = cssItems[i];
    const movie = movies.getElementsByTagName("h3")[0].textContent.toLowerCase();
    if( movie.includes(searchInput.value.toLowerCase())){
      movies.style.display = "block";
    }else{
      movies.style.display = "none";
    }
  }
}
);

deleteButton.addEventListener('click', ()=>{
  searchInput.value = '';
}
)

const ban = document.getElementById("banner");
ban.addEventListener("click",()=>{
  if(confirm("Oh! You also SPIDER-MAN lovers? ♡♡♡")){  
    window.location.href="SPIDER-MAN.html";
  };
})
