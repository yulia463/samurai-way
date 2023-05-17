export const Required = (value: any) => {
    if (value) {
        return undefined
    }
    return 'Field is required'

}
export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value.length && maxLength > 30) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined

}