export const validateVarious = (args) =>{
    return args.every((it) => {return it} )
}

export function getErrorMessage(error) {
    return error.response?.data ? error.response.data.message : error.message
}
