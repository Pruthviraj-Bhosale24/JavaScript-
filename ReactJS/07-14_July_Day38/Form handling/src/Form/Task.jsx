import { useState } from "react";
import "./Task.css";

export default function Task() {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        city: "",
        mobile: ""
    });

    const [data, setData] = useState(null);


    function handleChange(e) {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }


    function handleSubmit(e) {
        e.preventDefault();

        setData(formdata);

        setFormData({
            name: "",
            email: "",
            city: "",
            mobile: ""
        });
    }


    return (
        <div className="container">

            <form onSubmit={handleSubmit}>

                <h1>User Form</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formdata.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formdata.email}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formdata.city}
                    onChange={handleChange}
                />


                <input
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formdata.mobile}
                    onChange={handleChange}
                />


                <button type="submit">
                    LOGIN
                </button>

            </form>


            {
                data &&

                <div className="result">

                    <h2>Submitted Data</h2>

                    <p>
                        <b>Name:</b> {data.name}
                    </p>

                    <p>
                        <b>Email:</b> {data.email}
                    </p>

                    <p>
                        <b>City:</b> {data.city}
                    </p>

                    <p>
                        <b>Mobile:</b> {data.mobile}
                    </p>

                </div>
            }

        </div>
    );
}