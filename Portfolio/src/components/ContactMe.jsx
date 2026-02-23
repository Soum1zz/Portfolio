import '../styles/contact.css'

export default function ContactMe(){
    return(
        <div className="sub-div">
            <div className='sub-title'>CONTACT ME
            <div className='sub-hori-line'></div>
            </div>
            <form
                action="https://formspree.io/f/mdalwrqy"
                method="POST"
            >
                <label><input name="email"
                placeholder='Email *'
                required
                /></label>
                <label><input name="phone"
                type='email'
                placeholder='Phone Number *'
                required
                /></label>
                <label><input name="message"
                placeholder='Your Message *'
                style={{height:"200px"}}
                required
                /></label>
                <button type='submit'>SEND MESSAGE</button>
            </form>
        </div>
    )
}