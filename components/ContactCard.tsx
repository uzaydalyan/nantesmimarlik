import styles from '../styles/ContactCard.module.scss';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const ContactCard = () => {

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

    useEffect(() => {
        console.log(name + " " + nameError)
        console.log(surname + " " + surnameError)
        console.log(email + " " + emailError)
        console.log(phone + " " + phoneError)
        console.log(message + " " + messageError)
    })
    const handleSubmit = () => {

        setNameError(name == "")
        setSurnameError(surname == "")
        setEmailError(email == "")
        setMessageError(message == "")
        setPhoneError(phone == "")
 
        if(email && name && surname && phone && message){
            
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
                <div className={styles.form_form}>

                    <TextField id="name" label="İsminiz" variant="standard" required value={name} onChange={e => setName(e.target.value)} error={nameError} />
                    <TextField id="surname" label="Soyisminiz" variant="standard" required value={surname} onChange={e => setSurname(e.target.value)} error={surnameError} />
                    <TextField id="email" label="Email Adresiniz" variant="standard" required value={email} onChange={e => setEmail(e.target.value)} error={emailError} />
                    <TextField id="phone_number" label="Telefon Numaranız" variant="standard" required value={phone} onChange={e => setPhone(e.target.value)}  error={phoneError} />
                    <div className={styles.message}><TextField id="standard-basic" label="Mesaj" variant="standard" multiline rows={4} required value={message} onChange={e => setMessage(e.target.value)} error={messageError} /></div>
                    <div className={styles.button_bg}>
                        <div className={styles.button} onClick={handleSubmit} >Mesaj Yolla</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactCard