import './contact.css'
const Contact = () => {
    return(
        <div className='contact-container'>
            <h2>
                Ready to connect with me?
            </h2>
            <div className='form'>
                <h4>
                    Let's Connect!
                </h4>
                <form>
                    <div className='inputs-about'>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>
                        <input type='email' placeholder='Email address'/>
                        <textarea placeholder='Enter Text here' rows='5' cols='33'/>
                        <button>Get in Touch</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default Contact