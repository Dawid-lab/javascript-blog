'use strict'; // wyswietla pomylki w przegladarce

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */
  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);
    /* remove class 'active' from all article links -  usuń klasę „aktywną” ze wszystkich linków do artykułów  */
const activeLinks = document.querySelectorAll('.titles a.article');
    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  
    /* add class 'active' to the clicked link */
  
    /* remove class 'active' from all articles -usuń klasę „aktywna” ze wszystkich artykułów*/
    const activeArticles = document.querySelectorAll('article.active');
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
  
    /* get 'href' attribute from the clicked link */
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    
  }
