import { User } from "./users.model"


export interface UserInitialStateModel{
    users:User[],
    selectedUserID:number,
    selectedUser:User,
    isLoading:boolean,
    err:string
}


export const userInitialState : UserInitialStateModel ={
    users: [],
    selectedUserID:0,
    selectedUser:{
        data: {
            id:'',
            email:'',
            first_name:'',
            last_name:'',
            avatar:'',
        },
        support: {
            url :'',
            text: ''
        }
    },
    isLoading:true,
    err:''
}