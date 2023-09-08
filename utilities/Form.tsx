
export class Form{

    name: string;
    surname: string;
    email: string;
    phone: string;
    message: string;

    public constructor(name: string,
        surname: string,
        email: string,
        phone: string,
        message: string,){

        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.message = message;
    }
}