// export.functionNameAndBody
export const capitalize= (input)=>{
    if(typeof input !== "string"){
        throw new TypeError("should be string")
    }
    return input.toUpperCase()
}

export const createArray = (number)=>{
    const myArray = Array.from(Array(number).keys())
    return myArray
}
