import { useState } from "react";

export default function Form1() {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        mobile: ""
    });

    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formdata);
      
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formdata.name}
                    onChange={handleChange}
                />
                <br /><br /> <hr />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formdata.email}
                    onChange={handleChange}
                />
                <br /><br /> <hr />

                <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formdata.city}
                    onChange={handleChange}
                />
                <br /><br /> <hr />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formdata.mobile}
                    onChange={handleChange}
                />
                <br /><br /> <hr />

                <input type="submit" value="LOGIN" />
                 <hr />
            </form>

           

            
        </>
    );
}