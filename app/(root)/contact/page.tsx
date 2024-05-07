import ContactForm from "@/components/shared/ContactForm";

const Contact = () => {
    return (
        <section className=''>
            <div className=''>
                <ContactForm />
                {/* {process.env.EMAILJS_SEVICE_ID} */}
            </div>
        </section>
    )
}
export default Contact;