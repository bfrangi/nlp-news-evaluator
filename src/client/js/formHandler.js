function handleSubmit(event) {
    event.preventDefault()

    let formTitle = document.getElementById('title').value
    Client.checkTitleLength(formTitle)
    let formLanguage = document.getElementById('language').value
    let queryParamsDiv = document.getElementById('query-params')
    queryParamsDiv.innerHTML = '<p>Your query parameters are:</p>' 
    + '<p>Title: ' + formTitle + '</p>' 
    + '<p>Language: ' + formLanguage + '</p>' 
    
    const url = 'http://localhost:8081/test?name=' + formTitle + '&language=' + formLanguage
    
    console.log("::: Form Submitted :::")
    console.log('GET', url)
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = 
        '<p>Title: ' + res.title + '</p>'
        + '<p>Sentiment: ' + res.sentiment + '</p>'
        + '<p>Link: ' + res.link + '</p>'
        + '<p>Summary: ' + res.summary + '</p>'
    })
}

export { handleSubmit }
