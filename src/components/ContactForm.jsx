import React, { useState } from 'react'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSending, setIsSending] = useState(false)
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const validate = () => {
    let errors = {};
    if(!formData.name) errors.name = "Name is required"
    if(!formData.email) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is required"
    }
    if (!formData.message) errors.message = "Message is required"
    return errors;
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErros = validate();
    if(Object.keys(validationErros).length > 0 ) {
      setErrors(validationErros)
    } else {
      setErrors({});
      setIsSending(true);

      emailjs 
        .send(
          "service_yhx3fpa",
          "template_lacy1j5",
          formData,
          "3Sk5MSMWvKwJZVyo8"
        )
        .then((response) => {
          toast.success("Message sent successfully!");
          setFormData({name: '', email: '', message: ""})
         })
         .catch((error) => {
          console.log("Failed...", error)
          toast.error("Failed to send message.Please try again later.")
         })
         .finally(() => {
          setIsSending(false)
         })
    }
  }
  return (
    <section className='bg-stone-50 p-4 ' id='contact'>
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
        Let`s Connect
      </h2>
      <form onSubmit={handleSumbit} className='mx-auto mb-20 lg:max-w-3xl'>
        <div className='mb-4 flex space-x-4'>
          <div className='lg:w-1/2'>
          <input type="text" id='name' name='name' value={formData.name}
          placeholder='Name' onChange={handleChange} className='mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
          />
          {errors.name && (
            <p className='text-sm text-rose-800'>{errors.name}</p>
          )}
          </div>
          <div className='lg:w-1/2'>
          <input 
          type="email" 
          id='email'
          name='email' 
          value={formData.email}
          placeholder='Email' 
          onChange={handleChange} 
          className='mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2  focus:border-stone-400 focus:outline-none'
          />
          {errors.email && (
            <p className='text-sm text-rose-800'>{errors.email}</p>
          )}
          </div>
        </div>
        <div className='mb-4'>
            <textarea 
            id='message'
            name='message' 
            value={formData.message}
            placeholder='Message' 
            onChange={handleChange} 
            className='mb-8 w-full appearance-none rounded-lg border border-emerald-950 bg-transparent px-3 py-2  focus:border-stone-400 focus:outline-none'
            rows={6  }
            />
            {errors.message && (
              <p className='text-sm text-rose-800'>{errors.message}</p>
            )}
          </div>
          <button type='sumbit' className={`mb-8 w-full rounded border bg-emerald-950 px-4 py-2 font-semibold text-orange-50 hover:bg-emerald-900 ${
            isSending ? "cursor-not-allowed opacity-50" 
            : ""
          } `}
          disabled={isSending}>
            <div className='flex items-center justify-center gap-2'>
              {isSending ? "Sending..." : "Send"}
              <FiSend/>
            </div>
          </button>
      </form>
    </section>
  )
}

export default ContactForm
