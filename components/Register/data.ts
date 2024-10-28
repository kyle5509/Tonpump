export const register = {
    firstname: '',
    lastname: '',
    username: '',
    wallet_address: '',
}


type TError = {
    firstname: string
    lastname: string
    username: string
    wallet_address: string
    backend?: string
}

export const error: TError = {
    firstname: '',
    lastname: '',
    username: '',
    wallet_address: '',
    backend: ''
}