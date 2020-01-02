





const bgImage = $('.background');
const textil = $ ('.title');
const rating = $ ('.rate');

axios({
    method : "get",
    url : "https://api.giphy.com/v1/gifs/random?api_key=WKn5PSLJnDyZ3F216jgc9kfONLxNPpau",
})

.then(response => {
    console.log(response.data.data.image_original_url);
      bgImage.css('background-image', `url(${response.data.data.image_original_url})`)
})
.catch(error => {
    console.log(error);
});


axios({
    method : "get",
    url : "https://api.giphy.com/v1/gifs/random?api_key=WKn5PSLJnDyZ3F216jgc9kfONLxNPpau",
})

.then(response => {

console.log(response.data.data.title);
textil.text (`${response.data.data.title}`)

})
.catch(error => {
    console.log(error);
});


axios({
    method : "get",
    url : "https://api.giphy.com/v1/gifs/random?api_key=WKn5PSLJnDyZ3F216jgc9kfONLxNPpau",
})

.then(response => {

console.log(response.data.data.rating);
rating.text (`${response.data.data.rating}`)

})
.catch(error => {
    console.log(error);
});









