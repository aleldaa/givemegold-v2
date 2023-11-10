// import React from 'react'
// const ContactForm = () => {

//     const [formStatus, setFormStatus] = React.useState('Send')

//     const onSubmit = (e) => {
//         e.preventDefault()
//         setFormStatus('Submitting...')
//         const { name, email, message } = e.target.elements
//         let conFom = {
//             name: name.value,
//             email: email.value,
//             message: message.value,
//         }
//         console.log(conFom)
//     }

//     return (
//         <div className="container mt-5">
//             <h2 className="mb-3">Contact us</h2>
//             <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                     <input className="form-control" type="text" id="name" required placeholder='Name'/>
//                 </div>
//                 <div className="mb-3">
//                     <input placeholder='Email' className="form-control" type="email" id="email" required />
//                 </div>
//                 <div className="mb-3">
//                     <textarea placeholder='Message' className="form-control" id="message" required />
//                 </div>
//                 <button className="btn btn-danger" type="submit">
//                     {formStatus}
//                 </button>
//             </form>
//         </div>
//     )
// }
// export default ContactForm

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_q6d3jys', 'template_diejz23', form.current, 'q8GsjZqkl7M7hr4Rk')
            .then((result) => {
                // show the user a success message
            }, (error) => {
                // show the user an error
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <input className='bg-gray-700' type="text" name="user_name" placeholder='Name' />
            </div>
            <div>
                <input className='bg-gray-700' type="email" name="user_email" placeholder='Email' />
            </div>
            <div>
                <textarea className='bg-gray-700' name="message" placeholder='Message' />
            </div>
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
