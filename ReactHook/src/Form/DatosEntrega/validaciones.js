export const validarInput = (input) => {

    const length = input.length
    return ( length > 1 && length < 30) ? true : false; 

}
