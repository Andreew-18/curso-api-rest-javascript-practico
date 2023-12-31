
searchFormBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;
})

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
})

arrowBtn.addEventListener('click', () => {
    const stateLoad = window.history.state ? window.history.state.loadUrl : '';
    if (stateLoad.includes('#')) {
        window.location.hash = '#home';
    } else {
        window.history.back();
    }
})

window.addEventListener("DOMContentLoaded", () => {
    navigator();
    // Agregando un estado de carga inical
    window.history.pushState({ loadUrl: window.location.href }, null, '');
},
false);
window.addEventListener("hashchange", navigator, false);


function navigator() {
    // console.log(location);

    if(location.hash.startsWith('#trends')) {
        trendsPage(); }
    else if (location.hash.startsWith('#search=')) {
        searchPage();  
    } 
    else if (location.hash.startsWith('#movie=')) {
        movieDetailsPage();    
    } 
    else if (location.hash.startsWith('#category=')) {
        categoriesPage();     
    } 
    else {
        homePage();        
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function homePage(){
    console.log('Home!!');


    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Home';

    
    getTrendingMoviesPreview();
    getCategoriesPreview();
}
function categoriesPage(){
    console.log('categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId,categoryName] = categoryData.split('-');
    const newName = decodeURI(categoryName)
    headerCategoryTitle.innerHTML = newName;
    
    getMoviesByCategory(categoryId);

}

function movieDetailsPage(){
    
    console.log('Movie!!');

    
    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');

    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');


    // ['movie', ' id' ]
    const [_, movieId] = location.hash.split('=');
    getMovieById(movieId);
}

function searchPage(){

    console.log('Search');

    
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    // ['search', ' value' ]
    const [_, query] = location.hash.split('=');
    getMoviesBySearch(query);
}

function trendsPage(){
    console.log('TRENDS!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive')

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML = 'Tendencias';

    getTrendingMovies()
}







