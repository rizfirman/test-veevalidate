export function isPhoneNumber(str) {
    const reg = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{2,4}$/
    return reg.test(str)
}

export function strongPassword(value) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    return strongRegex.test(value)
}