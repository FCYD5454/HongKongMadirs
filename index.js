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
  window.location.href="/Index/index.html";
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
const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');
const container = document.querySelector('.container');
const ban = document.getElementById("banner");

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const query = searchInput.value.toLowerCase();
  const cssItems = container.getElementsByClassName('css');

  for (let i = 0; i < cssItems.length; i++) {
    const item = cssItems[i];
    const title = item.getElementsByTagName('h3')[0].textContent.toLowerCase();

    if (title.includes(query)) {
      item.style.display = 'block';  
    } else {
      item.style.display = 'none';
    }
  }
}

deleteButton.addEventListener('click', function () {
  searchInput.value = '';
}
)
