const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000 );
});


/* Promisse Normal
minhaPromise().then(response => {
    console.log(response);
})
.catch(err => {
console.log(reject);
});
*/
//Async && Await
async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}


executaPromise();