import {Form} from '../utilities/Form'

export class FormFilter {

    public static instance : FormFilter;

    public static getInstance(): FormFilter {
        if (!FormFilter.instance) {
            FormFilter.instance = new FormFilter();
        }

        return FormFilter.instance;
    }

    public getValidityMap(form: Form) : Map<string, Boolean>{

        let map = new Map<string, Boolean>();

        let isNameValid = this.getNameValidity(form.name);
        let isSurnameValid = this.getNameValidity(form.surname);
        let isEmailValid = this.getEmailValidity(form.email);
        let isPhoneValid = this.getPhoneValidity(form.phone);
        let isMessageValid = this.getMessageValidity(form.name);

        map.set("name", isNameValid);
        map.set("surname", isSurnameValid);
        map.set("email", isEmailValid);
        map.set("phone", isPhoneValid);
        map.set("message", isMessageValid);

        return map;
    }

    private getNameValidity(surname: string) : Boolean {
        return this.isNotEmpty(surname) && surname.length < 30;
    }
    
    private getEmailValidity(email: string) : Boolean {
        
        let regex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        return regex.test(email);
    }
    
    private getPhoneValidity(phone: string) : Boolean{
    
        let regex = new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);
        return regex.test(phone);
    
    }
    
    private getMessageValidity(message: string) : Boolean{
        return this.isNotEmpty(message);
    }
    
    private isNotEmpty(input: string) : Boolean {
        return input != "" && input != null;
    }
}


