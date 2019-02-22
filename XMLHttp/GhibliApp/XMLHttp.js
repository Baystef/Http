const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const request = new XMLHttpRequest();
//open a new connection with GET on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    //Access JSON data here
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //Create a p and set the text content to the film's description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300); //Limit to 300 chars
            p.textContent = `${movie.description}...` //end with ellipses

            //Append the cards to the container element
            container.appendChild(card);

            //Each card contains an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Oh No! it has refused to work`;
        app.appendChild(errorMessage);
    };
}
//send request
request.send();