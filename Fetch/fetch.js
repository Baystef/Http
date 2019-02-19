const ul = document.getElementById('authors'); //list where we'll place authors
const url = 'https://randomuser.me/api/?results=10'; //Get 10 random users

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
    .then((resp) => resp.json()) //Transform data to json
    .then(function(data) {
        let authors = data.results  //get the results
        return authors.map(function(author) {
            const li = createNode('li'),
                  img = createNode('img'),
                  span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `${author.name.first} ${author.name.last}`;

            append(li, img);
            append(li, span);
            append(ul, li);
        })
        
        
    })
    .catch(function(error) {

    });