'use strict'; // wyswietla pomylki w przegladarce

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */
  const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log(event);

    const clickedElement = this;
   
    const activeLinks = document.querySelectorAll('.titles a.active'); /* remove class 'active' from all article links -  usuń klasę „aktywną” ze wszystkich linków do artykułów  */
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    clickedElement.classList.add('active');  /* add class 'active' to the clicked link */    
    const activeArticles = document.querySelectorAll('.post.active'); /* remove class 'active' from all articles -usuń klasę „aktywna” ze wszystkich artykułów*/
    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }
    const targetArticleId = clickedElement.getAttribute('href'); /* get 'href' attribute from the clicked link */
    const targetArticle = document.querySelector(targetArticleId); /* find the correct article using the selector (value of 'href' attribute) */
    targetArticle.classList.add('active'); /* add class 'active' to the correct article */
  } 
    
  const links = document.querySelectorAll('.titles a');
    for(let link of links){
      link.addEventListener('click', titleClickHandler);  
  }
