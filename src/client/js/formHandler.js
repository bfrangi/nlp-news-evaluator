function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('text').value
    Client.checkTitleLength(formText)
    let formLanguage = document.getElementById('language').value
    let queryParamsDiv = document.getElementById('query-params')
    queryParamsDiv.innerHTML = '<p>Your query parameters are:</p>' 
    + '<p><span class="heading">Text:</span> ' + formText + '</p>' 
    + '<p><span class="heading">Language:</span> ' + formLanguage + '</p>' 
    
    const url = 'http://localhost:8081/test?text=' + formText + '&language=' + formLanguage
    
    console.log("::: Form Submitted :::")
    console.log('GET', url)
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = ""
        for (let story of res.stories) {
            document.getElementById('results').innerHTML += '<p><span class="heading">Title:</span> <a href="'  + story.link + '">' + story.title + '</a></p>'
            + '<p><span class="heading">Sentiment:</span> ' + story.sentiment + '</p>'
            + '<p><span class="heading">Summary:</span> ' + story.summary + '</p> <hr>'
        }
    })
}

export { handleSubmit }
