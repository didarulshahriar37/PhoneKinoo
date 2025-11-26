"use client";

import React from 'react'
import Swal from 'sweetalert2';

export default function AddPhones() {

    const handleAddPhone = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const photo = event.target.photo.value;
        const shortDescription = event.target.shortDescription.value;
        const longDescription = event.target.longDescription.value;
        const price = event.target.price.value;
        const publishedAt = new Date().toISOString();
        const userName = event.target.userName.value;
        const email = event.target.userEmail.value;

        const newPhone = {
            name: name,
            brand: brand,
            photo: photo,
            shortDescription: shortDescription,
            longDescription: longDescription,
            price: price,
            publishedAt: publishedAt,
            userName: userName,
            email: email
        };

        fetch("https://phone-kinoo-server.vercel.app/phones", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newPhone)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Phone Added Succesfully !",
                        icon: "success",
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
                event.target.reset();
            })
    }

    return (
        <div className=''>
            <div className="mt-10 mb-15 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleAddPhone} className="fieldset">
                        <label className="label">Mobile Name</label>
                        <input name='name' type="text" className="input w-full" placeholder="Mobile Name" required />
                        <label className="label">Mobile Brand</label>
                        <input name='brand' type="text" className="input w-full" placeholder="Mobile Brand" required />
                        <label className="label">Photo</label>
                        <input name='photo' type="text" className="input w-full" placeholder="Mobile photoURL" required />
                        <label className="label">Short Description</label>
                        <input name='shortDescription' type="text" className="input w-full" placeholder="Short Description" required />
                        <label className="label">Details</label>
                        <input name='longDescription' type="text" className="input w-full" placeholder="Details" required />
                        <label className="label">Price</label>
                        <input name='price' type="text" className="input w-full" placeholder="Mobile Price" required />
                        <label className="label">Your Name</label>
                        <input name='userName' type="text" placeholder='Your Name' className="input w-full" required />
                        <label className="label">Your Email</label>
                        <input name='userEmail' placeholder='Your Email' type="email" className="input w-full" required />
                        <button type='submit' className="btn bg-linear-to-r from-[#ff7e5f] to-[#feb47b] mt-4">Add Mobile</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
