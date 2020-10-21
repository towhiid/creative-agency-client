import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('text', info.text);

        fetch('https://evening-mountain-50530.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className = "container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5>Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Service Title</label>
                        <input onBlur={handleBlur} type="name" className="form-control" name="name" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput1">icon</label>
                        <input onChange={handleFileChange} type="file" className="form-control"  placeholder="Picture" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInput1">Description</label>
                        <input onBlur={handleBlur} type="text" className="form-control"  placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;