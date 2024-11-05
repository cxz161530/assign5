fetch('./degree.json').then((response)=>{
    console.log('resolved', response);
    return response.json();
}).catch((err)=>{
    console.log('rejected', err)
});