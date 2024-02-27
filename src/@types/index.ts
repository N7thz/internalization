export interface Dictionary {
    server_components: ServerComponents
    couter: Couter
    switcher_title: string
    current_locale: string
}

export interface ServerComponents {
    welcome: string
}

export interface Couter {
    increment: string
    decrement: string
}
