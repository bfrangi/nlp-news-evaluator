function handleSubmit(event) {
    event.preventDefault()

    console.log("::: Form Submitted :::")
    let formTitle = document.getElementById('title').value
    let formLanguage = document.getElementById('language').value
    let queryParamsDiv = document.getElementById('query-params')
    queryParamsDiv.innerHTML = '<p>Your query parameters are:</p>' 
    + '<p>Title: ' + formTitle + '</p>' 
    + '<p>Language: ' + formLanguage + '</p>' 
    
    const url = 'http://localhost:8081/test?name=' + formTitle + '&language=' + formLanguage
    console.log('GET', url)

    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
