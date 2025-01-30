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

        <section>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
                <input type="text" name="name" required placeholder="name" className=" bg:[#fbcfc2]" />
                <input type="email" name="email" required placeholder="email " className="bg:[#fbcfc2]" />
                <textarea name="message" required placeholder="input" className="bg:[#fbcfc2]"></textarea>

                <button type="submit">Submit Form</button>

            </form>
            <span>{result}</span>

        </section>
    );
}