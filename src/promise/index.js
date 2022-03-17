

const somethingWillHappen = () => {
    return new Promise((resolve, reject)=> {
        if(true){
            resolve('Hey');
        }else{
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const somethingWillHappenTwo = () => {
    return new Promise((resolve, reject)=> {
        if(true){
            setInterval(() => {
                resolve('True!');
            }, 2000);
        }else{
            const error = new Error('Error!'); //Genera el error en terminal
            reject(error);
        }
    });
}

somethingWillHappenTwo()
.then(response => console.log(response))
.catch(err => console.error(err));

//Promise encadenada

Promise.all([somethingWillHappen(), somethingWillHappenTwo()])
.then(response => {console.log(response)})
.catch(err => {console.error(err)});