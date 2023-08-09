let myForm = document.getElementById('myForm');
let result = document.getElementById('result');
let spinner = document.getElementById('spinner');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    spinner.classList.remove('d-none');
    const keyWord = document.getElementsByClassName('search')[0].value;
    if (keyWord === '') {
        result.textContent = 'Please enter the Keyword....';
        spinner.classList.add('d-none');
    } else {
        const API_KEY = 'AIzaSyBYsF33Mg-DucLyJ8u4x-svNEZTXGQiFn4';
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(keyWord)}&key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                let search_result = data.pageInfo.totalResults;
                console.log(data);
                spinner.classList.add('d-none');
                result.textContent = 'The Keyword ' + keyWord + ' is appeared ' + search_result + ' times';
            });
    }
    localStorage.setItem('resultItem', result);
});