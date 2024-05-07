import ContactForm from "@/components/shared/ContactForm";

const Contact = () => {
    return (
        <section className=''>
            {/* console.log(process.env.EMAILJS_SEVICE_ID);
console.log(process.env.EMAILJS_TEMPLATE_ID);
console.log(process.env.EMAILJS_PUBLIC_KEY); */}
            <div className=''>
                <ContactForm />
                {/* {process.env.EMAILJS_SEVICE_ID} */}
            </div>
        </section>
    )
}
export default Contact;