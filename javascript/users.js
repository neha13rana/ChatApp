const searchBar = document.querySelector(".users .search input"),
searchIcon = document.querySelector(".users .search button");
usersList = document.querySelector(".users-list");

searchIcon.onclick = ()=>{
  // searchBar.classList.toggle("show");
  searchIcon.classList.toggle("active");
  searchBar.focus();
  searchIcon.classList.toggle("active");
  // if(searchBar.classList.contains("active")){
    searchBar.value = "";
  //   searchBar.classList.remove("active");
  // }
}

searchBar.onkeyup = ()=>{
  let searchTerm = searchBar.value;
  if(searchTerm != ""){
    searchBar.classList.add("active");
  }else{
    searchBar.classList.remove("active");
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/search.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let data = xhr.response;
          usersList.innerHTML = data;
          // console.log(data);
        }
    }
  }
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("searchTerm=" + searchTerm);
}

setInterval(() =>{
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "php/users.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let data = xhr.response;
          // console.log(data);
          // usersList.innerHTML
          if(!searchBar.classList.contains("active")){
            usersList.innerHTML = data;
          } 
        }
    }
  }
  xhr.send();
}, 500);

