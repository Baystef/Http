const url = 'https://randomuser.me/api';
// The data to be sent in the request
let data = {
    name: 'Sara'
}

// Parameters to be passed to the fetch function
let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}

fetch(url, fetchData)
    
    .then(function(data) {
        // Handle response gotten from server        
    })
    .catch(function(error) {
        console.log(error);
    });

    ////////////////////////////////
    ///////////////////////////////
    // Using the request constructor
    let data = {
        name: 'Sara'
    }

    let request = new Request(url, {
        method: 'POST',
        body: data,
        headers: new Headers()
    });

fetch(request)
    .then(function() {
        
    })