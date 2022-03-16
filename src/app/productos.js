export const productos = async() => {

    const url = 'https://productostiendita.herokuapp.com/productos'
    const response = await fetch(url);
    const {results} = await response.json();
    return results
}