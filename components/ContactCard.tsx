import styles from '../styles/ContactCard.module.scss';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import { Close } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { TextField, Alert, IconButton, Collapse } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../constants';
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../constants';
import { Form } from '../utilities/Form';
import { FormFilter } from '../utilities/FormFilter';

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

    const [formResultText, setFormResultText] = useState("");
    const [formSuccess, setFormSuccess] = useState(false);
    const [formResultTextOpen, setFormResultTextOpen] = useState(false);

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

        if (validityMap.get("name") && validityMap.get("surname") && validityMap.get("email") && validityMap.get("phone") && validityMap.get("message")) {

            console.log("hello");

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current || "", EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    setFormSuccess(true)
                    setFormResultText("Mesajınız alındı, teşekkürler.")
                    setFormResultTextOpen(true)
                    
                }, (error) => {
                    setFormSuccess(false)
                    setFormResultText("Bir hata oluştu, tekrar deneyiniz.")
                    setFormResultTextOpen(true)
                });

        } else {

        }
    }


    return (
        <div className={styles.contact}>
            <div className={styles.info}>
                <div className={styles.info_title}>İletişim Bilgileri</div>

                <div className={styles.info_addresses}>
                    <div className={styles.info_address}>
                        <PhoneInTalkIcon className={styles.info_icon} />
                        <a className={styles.info_value} href='tel:905321201201'>+90 532 120 12 01</a>
                    </div>
                    <div className={styles.info_address}>
                        <MailIcon className={styles.info_icon} />
                        <a className={styles.info_value} href='mailto:nantesmimarlik@gmail.com'>nantesmimarlik@gmail.com</a>
                    </div>
                    <div className={styles.info_address}>
                        <PlaceIcon className={styles.info_icon} />
                        <div className={styles.info_value}>General Şükrü Kanatlı Mahallesi, Atatürk Caddesi, Millet Behçesi, no: 84 Antakya/Hatay</div>
                    </div>
                    <div className={styles.info_address}>
                        <PlaceIcon className={styles.info_icon} />
                        <div className={styles.info_value}>Cihannüma mahallesi, Beşiktaş/İstanbul</div>
                    </div>
                </div>

                <div className={styles.social}>
                    <a className={styles.icon} href='https://www.instagram.com/nantesmimarlik/'>
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.form_title}>Bize Ulaşın!</div>
                <form className={styles.form_form} ref={form}>
                    <TextField name="name" id="name" label="İsminiz" variant="standard" required value={name} onChange={e => setName(e.target.value)} error={nameError} helperText={nameError && errorText} />
                    <TextField name="surname" id="surname" label="Soyisminiz" variant="standard" required value={surname} onChange={e => setSurname(e.target.value)} error={surnameError} helperText={surnameError && errorText} />
                    <TextField name="email" id="email" label="Email Adresiniz" variant="standard" required value={email} onChange={e => setEmail(e.target.value)} error={emailError} helperText={emailError && errorText} />
                    <TextField name="phone" id="phone_number" label="Telefon Numaranız" variant="standard" required value={phone} onChange={e => setPhone(e.target.value)} error={phoneError} helperText={phoneError && errorText} />
                    <div className={styles.message}><TextField name="message" id="message" label="Mesaj" variant="standard" multiline rows={4} required value={message} onChange={e => setMessage(e.target.value)} error={messageError} helperText={messageError && errorText} /></div>
                    <div className={styles.button_bg}>
                        <Collapse in={formResultTextOpen}>
                            <Alert
                                severity={formSuccess ? 'success' : 'error'}
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setFormResultTextOpen(false)
                                        }}
                                    >
                                        <Close fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {formResultText}
                            </Alert>
                        </Collapse>
                        <div className={styles.button} onClick={handleSubmit} >Mesaj Yolla</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactCard