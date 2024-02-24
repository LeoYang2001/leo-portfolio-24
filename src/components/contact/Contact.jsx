
import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactCard from './ContactCard';

const Contact = () => {
  const iconSize = 30;

  //ready - pending - sent
  const [messageStatus, setMessageStatus] = useState('ready')
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactList = [
    {
      iconSvg : (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
    </svg>),
      contactMethod:'Email',
      contactAddr:'jya261@uky.edu'
    },
    {
      iconSvg : (<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-voicemail" viewBox="0 0 16 16">
      <path d="M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>
    </svg>),
      contactMethod:'Phone',
      contactAddr:'901-455-3148'
    }
  ]
  

  const sendEmail = (e) => {
    e.preventDefault();
    const cfm = window.confirm('Do you want to send the message?')
    if(!cfm)  return setFormData({
      name: '',
      email: '',
      message: '',
    });
    //send the message
    setMessageStatus('pending')
    emailjs
      .sendForm('service_m2fuaz5', 'template_cbk1w9k', form.current, {
        publicKey: 'h1-Vq5dd0YjBV-JFc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
            //message sent successfully
            setMessageStatus('sent')
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setTimeout(()=>{
            setMessageStatus('ready')
          }, 3000)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="contact section flex flex-col items-center" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className='flex justify-center gap-20 flex-wrap contactContainer'>
    <div className=' flex flex-col items-center'>
    <span style={{color:'var(--title-color)'}} className='font-bold text-2xl'>Talk to me</span>

        {
          contactList.map((contactItem)=>(
            <ContactCard key={contactItem.contactAddr} contactItem={contactItem}/>
          ))
        }
        </div>
        <div  className=' flex flex-col  items-center'>
          <span style={{color:'var(--title-color)'}} className='font-bold text-2xl'>Quick email</span>
          <form onSubmit={sendEmail} ref={form} className='contactForm' action="#">
        <div className='mt-10 border contactInput rounded-md'>
          <input
          required
            name='name'
            type="text"
            value={formData.name}
            onChange={handleChange}
            className='bg-transparent py-3 px-4 w-full h-full outline-gray-500'
            placeholder='Insert your name'
          />
        </div>
        <div className='mt-4 border contactInput rounded-md'>
          <input
          required
            name='email'
            type="email"
            value={formData.email}
            onChange={handleChange}
            className='bg-transparent py-3 px-4 w-full h-full outline-gray-500'
            placeholder='Insert your email'
          />
        </div>
        <div className='mt-4 border contactInput rounded-md'>
          <textarea
          required
            name='message'
            type="text"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className='bg-transparent resize-none py-3 px-4 w-full h-full outline-gray-500'
            placeholder='Your message...'
          />
        </div>
        <button disabled={messageStatus != 'ready'} type="submit" download="" className="button button--flex gap-2 mt-4 cursor-pointer">
         {
          messageStatus == 'ready' && (
            <>
             Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            </>
          )
         }
         {
          messageStatus == 'pending' && (
            <>
             Sending...
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-dash" viewBox="0 0 16 16">
        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-5.5 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5"/>
      </svg>
            </>
          )
         }
         {
          messageStatus == 'sent' && (
            <>
             Message Sent
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send-check-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
</svg>
            </>
          )
         }
         
        </button>
      </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact