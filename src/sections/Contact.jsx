import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';



const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //service_ole66q9
    //template_e0n1cd5
    //tzkWj3DLKbOHfCOH7
    try {
       await emailjs
      .send(
        'service_ole66q9',
        'template_ujw8dhq',
        {
          from_name: form.name,
          to_name: 'Prashant Kumar',
          from_email: form.email,
          to_email: 'prashantk0123478@gmail.com',
          message: form.message,
        },
        'tzkWj3DLKbOHfCOH7',
      )

      console.log(emailjs)

      setLoading(false)
      alert('message sent successfully!')

      setForm(
        { name: '',
          email: '', 
          message: '' 
        }
      )
        
    } catch (error) {
        setLoading(false)
        console.error('Failed to send email', error);
        
    }
    
      
  };

  return (
    <section className="c-space my-20" id="contact">
      

      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container  ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 max-lg:mt-5 flex flex-col space-y-7  max-lg:space-y-3">
            <label className="space-y-3 max-lg:space-y-1">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3 max-lg:space-y-1">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3 max-lg:space-y-1">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ resize: "none" }}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;