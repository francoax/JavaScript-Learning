try {
    throw {
        error: "Especifique ",
        info: "mala correspondencia"
    }
} catch (error) {
    console.log(error.info)
}