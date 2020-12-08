'use strict'; // wyswietla pomylki w przegladarce

/*document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */
const titleClickHandler = function (event) {
  console.log('Link was clicked!');
  console.log(event);

  const clickedElement = this;

  const activeLinks = document.querySelectorAll('.titles a.active'); /* remove class 'active' from all article links -  usuń klasę „aktywną” ze wszystkich linków do artykułów  */
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  clickedElement.classList.add('active');  /* add class 'active' to the clicked link */
  const activeArticles = document.querySelectorAll('.post.active'); /* remove class 'active' from all articles -usuń klasę „aktywna” ze wszystkich artykułów*/
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  const targetArticleId = clickedElement.getAttribute('href'); /* get 'href' attribute from the clicked link */
  const targetArticle = document.querySelector(targetArticleId); /* find the correct article using the selector (value of 'href' attribute) */
  targetArticle.classList.add('active'); /* add class 'active' to the correct article */
}




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags.list';

function generateTitleLinks() {

  /* remove contents of titleList usuń zawartość listy tytułów*/

  const titleList = document.querySelector(optTitleListSelector); /*  Znaleziony element zapisujemy w nowo zadeklarowanej stałej titleList */
  titleList.innerHTML = '' /* zmieniamy na pusty ciąg znaków */

  const articles = document.querySelectorAll(optArticleSelector);
  /* for each article dla każdego artykułu */
  for (let article of articles) {
    /* get the article id pobierz identyfikator artykułu */
    const articleId = article.getAttribute('id');
    console.log('articleId', articleId);
    /* find the title element znajdź element tytułu */
    const articleTitleElement = article.querySelector(optTitleSelector);

    /* get the title from the title element pobierz tytuł z elementu title */
    const articleTitle = articleTitleElement.innerHTML;
    console.log('articleTitle', articleTitle);
    /* create HTML of the link utwórz HTML linku */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML', linkHTML)
    /* insert link into titleList wstaw link do listy tytułów*/
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
  const links = document.querySelectorAll('.titles a');
  console.log(links);
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleTagsSelector);
  console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles){
  /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
  /* make html variable with empty string */
    let html = '';
  /* get tags from data-tags attribute */

  /* split tags into array */

  /* START LOOP: for each tag */
  }
  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();










