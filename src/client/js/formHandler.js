function handleSubmit(event) {
    event.preventDefault()

    let formTitle = document.getElementById('title').value
    Client.checkTitleLength(formTitle)
    let formLanguage = document.getElementById('language').value
    let queryParamsDiv = document.getElementById('query-params')
    queryParamsDiv.innerHTML = '<p>Your query parameters are:</p>' 
    + '<p><span class="heading">Title:</span> ' + formTitle + '</p>' 
    + '<p><span class="heading">Language:</span> ' + formLanguage + '</p>' 
    
    const url = 'http://localhost:8081/test?name=' + formTitle + '&language=' + formLanguage
    
    console.log("::: Form Submitted :::")
    console.log('GET', url)
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = 
        '<p><span class="heading">Title:</span> <a href="'  + res.link + '">' + res.title + '</a></p>'
        + '<p><span class="heading">Sentiment:</span> ' + res.sentiment + '</p>'
        + '<p><span class="heading">Summary:</span> ' + res.summary + '</p>'
    })
}

export { handleSubmit }
