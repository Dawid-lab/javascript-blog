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
  optArticleTagsSelector = '.post-tags .list';

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
  const articles = document.querySelectorAll(optArticleSelector);
  console.log(articles);

  /* START LOOP: for every article: */
  for (let article of articles){
  /* find tags wrapper */
    const titleList = article.querySelector(optArticleTagsSelector);
  /* make html variable with empty string */
    let html = '';
  /* get tags from data-tags attribute */
  const articleTags = article.getAttribute('data-tags');
  console.log('artileTags', articleTags);
  /* split tags into array */
  const articleTagsArray = articleTags.split(' ');
  console.log('articleTagsArray', articleTagsArray)
  /* START LOOP: for each tag */
  for(let tag of articleTagsArray){

  /* generate HTML of the link */
                            <li><a href="#tag-cat">cat</a></li>


  /* add generated code to html variable */

  }
  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
  }
}

generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();










