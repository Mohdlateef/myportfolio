import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "15469d32-1e8a-4253-85bb-a1292f302f81");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (

        <section className="w-[100%] border-r-2 my-5 py-11 px-10 rounded-lg shadow-2xl" id="contact" >
            <form onSubmit={onSubmit} className="flex flex-col gap-5 ">
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