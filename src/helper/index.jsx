export const checkfilledIsEmpty = ( field ) =>{
    // if(password === ''){
    //     return false;
    // }else {
    //     return true;
    // }
    return field ===  '';
}

export const checkArr = (arr) =>{

    let haycamposVacios = false;

    arr.map(( field ) => checkfilledIsEmpty(field) ? haycamposVacios = true : null)

    return haycamposVacios;
}

export const userName = (field) => {
    const fieldArr = field ? field.split(' ') : [];

    return {
        name: fieldArr[0] || '',
        lastName : fieldArr[1] || ''
    }
}

export const existUser = (user, key) => {
    return user ? user[key] : '';
}

export const retornarValor = (e) => {
    let valorCripto = JSON.parse(e.data);
    let valorCriptoDec = parseFloat(valorCripto.p).toFixed(2);
    return valorCriptoDec;
}

export const savedSessionStorage = (arr) => {
    arr.map((elemento) => {
        elemento.value && JSON.stringify(sessionStorage.setItem(elemento.key, elemento.value))
    });
}


export const highLow = (valorActual, valorAchequear) => {
        let claseRetornado;
        let valorObtenido = sessionStorage.getItem(valorAchequear);

        // valorObtenido && valorActual > valorObtenido ? claseRetornado = 'text-success' : claseRetornado = 'text-danger'
        console.log('esto es highlow', parseFloat(valorObtenido).toFixed(2))
        // return claseRetornado;

}