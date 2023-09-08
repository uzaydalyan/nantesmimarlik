import styles from '../styles/ContactCard.module.scss';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField, Button, FormControl, FormHelperText } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../constants';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../constants';
import {Form} from  '../utilities/Form';
import {FormFilter} from '../utilities/FormFilter';

const ContactCard = () => {
    
    const errorText = "Alanı kontrol ediniz."
    const form = useRef<HTMLFormElement>(null);

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const handleSubmit = () => {
        
        let validityMap = FormFilter.getInstance().getValidityMap(new Form(
            name,
            surname,
            email,
            phone,
            message
        ))

        setNameError(!validityMap.get("name"))
        setSurnameError(!validityMap.get("surname"))
        setEmailError(!validityMap.get("email"))
        setMessageError(!validityMap.get("message"))
        setPhoneError(!validityMap.get("phone"))
 
        if(validityMap.get("name") && validityMap.get("surname") && validityMap.get("email") && validityMap.get("phone") && validityMap.get("message")){

            console.log("hello");

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current || "", EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        } else{
            
        }
    }


    return (
        <div className={styles.contact}>
            <div className={styles.info}>
                <div className={styles.info_title}>İletişim Bilgileri</div>

                <div className={styles.info_addresses}>
                    <div className={styles.info_address}>
                        <PhoneInTalkIcon className={styles.info_icon} />
                        <div className={styles.info_value}>+90 542 334 32 90</div>
                    </div>
                    <div className={styles.info_address}>
                        <MailIcon className={styles.info_icon} />
                        <div className={styles.info_value}>info@gmail.com</div>
                    </div>
                    <div className={styles.info_address}>
                        <PlaceIcon className={styles.info_icon} />
                        <div className={styles.info_value}>Antakya, Hatay</div>
                    </div>
                </div>

                <div className={styles.social}>
                    <div className={styles.icon}>
                        <InstagramIcon />
                    </div>
                    <div className={styles.icon}>
                        <FacebookIcon />
                    </div>
                    <div className={styles.icon}>
                        <YouTubeIcon />
                    </div>
                    <div className={styles.icon}>
                        <TwitterIcon />
                    </div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.form_title}>Bize Ulaşın!</div>
                <form className={styles.form_form} ref={form}>
                    <TextField name="name" id="name" label="İsminiz" variant="standard" required value={name} onChange={e => setName(e.target.value)} error={nameError} helperText={nameError && errorText} />
                    <TextField name="surname" id="surname" label="Soyisminiz" variant="standard" required value={surname} onChange={e => setSurname(e.target.value)} error={surnameError} helperText={surnameError && errorText} />
                    <TextField name="email" id="email" label="Email Adresiniz" variant="standard" required value={email} onChange={e => setEmail(e.target.value)} error={emailError} helperText={emailError && errorText} />
                    <TextField name="phone" id="phone_number" label="Telefon Numaranız" variant="standard" required value={phone} onChange={e => setPhone(e.target.value)}  error={phoneError} helperText={phoneError && errorText} />
                    <div className={styles.message}><TextField name="message" id="message" label="Mesaj" variant="standard" multiline rows={4} required value={message} onChange={e => setMessage(e.target.value)} error={messageError} helperText={messageError && errorText} /></div>
                    <div className={styles.button_bg}>
                        <div className={styles.button} onClick={handleSubmit} >Mesaj Yolla</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactCard