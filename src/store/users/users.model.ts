export interface User {
        data: {
            id:string|null,
            email:string,
            first_name:string,
            last_name:string,
            avatar:string,
        },
        support: {
            url :string,
            text: string
        }
}