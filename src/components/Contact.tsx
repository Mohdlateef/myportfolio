import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        console.log(formData)

        formData.append("access_key", "15469d32-1e8a-4253-85bb-a1292f302f81");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (

        <section className=" w:[100] border-r-2 my-5 gap-10 rounded-lg shadow-2xl flex " id="contact" >
            <map className="bg-red-300 ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211426.63515987786!2d74.6419431467965!3d34.10689274284894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1744390554132!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy" >
                </iframe>
            </map>

            <form onSubmit={onSubmit} className="flex flex-col gap-5 flex-grow">
                <input type="text" name="name" required placeholder="Name" className=" bg-[#fbcfc2] h-16 text-2xl outline-none pl-5 rounded-lg" />
                <input type="email" name="email" required placeholder="Email " className="bg-[#fbcfc2] h-16 text-2xl pl-5 outline-none rounded-lg" />
                <input type="text" name="Subject" required placeholder="Subject " className="bg-[#fbcfc2] h-16 text-2xl pl-5 outline-none rounded-lg" />
                <textarea name="message" required placeholder="Message" className="bg:[#fbcfc2] p-0 text-2xl outline-none h-[10rem] pl-5 rounded-lg"></textarea>

                <button type="submit" className="text-2xl bg-[#fc7b54] h-16 px-3 rounded-sm text-white font-semibold">SEND MESSAGE</button>

            </form>
            <span>{result}</span>

        </section>
    );
}
