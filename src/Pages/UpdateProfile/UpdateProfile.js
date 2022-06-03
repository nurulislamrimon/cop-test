import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFindUser from '../../CustomHooks/useFindMember';

const UpdateProfile = () => {
    const { id } = useParams();
    const { user, setUser } = useFindUser(id);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/user/${id}`, {
            method: "put",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        )
            .then(res => res.json())
            .then(data => {
                data.modifiedCount > 0 && alert("Your information has been changed!")
            })
        e.target.reset();
    }
    const handleFormChange = (e) => {

        if (e.target.name === 'mNo') {
            const { mNo, ...rest } = user;
            const newMNo = e.target.value;
            setUser({ mNo: newMNo, ...rest });
        };

        if (e.target.name === 'aspectRatio') {
            const { aspectRatio, ...rest } = user;
            const newaspectRatio = e.target.value;
            setUser({ aspectRatio: newaspectRatio, ...rest });
        };

        if (e.target.name === 'name') {
            const { name, ...rest } = user;
            const newName = e.target.value;
            setUser({ name: newName, ...rest });
        };
        if (e.target.name === 'father') {
            const { father, ...rest } = user;
            const newFatherName = e.target.value;
            setUser({ father: newFatherName, ...rest })
        }

        if (e.target.name === 'address') {
            const { address, ...rest } = user;
            const newAddress = e.target.value;
            setUser({ address: newAddress, ...rest });
        };
        if (e.target.name === 'photo') {
            const { photo, ...rest } = user;
            const newPhoto = e.target.value;
            setUser({ photo: newPhoto, ...rest })
        }

        if (e.target.name === 'email') {
            const { email, ...rest } = user;
            const newEmail = e.target.value;
            setUser({ email: newEmail, ...rest });
        };

        if (e.target.name === 'mobile') {
            const { mobile, ...rest } = user;
            const newmobile = e.target.value;
            setUser({ mobile: newmobile, ...rest });
        };
        if (e.target.name === 'photo') {
            const { photo, ...rest } = user;
            const newPhoto = e.target.value;
            setUser({ photo: newPhoto, ...rest })
        }
        if (e.target.name === 'totalDeposit') {
            const { totalDeposit, ...rest } = user;
            const newTotalDeposit = e.target.value;
            setUser({ totalDeposit: newTotalDeposit, ...rest })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <form className=' d-flex justify-content-center flex-column' onSubmit={handleFormSubmit} onChange={handleFormChange}>
                <h1 className='text-center'>Update your profile</h1>
                <img src={user?.photo} alt="" height={80} width={70} className='rounded mx-auto' />
                <input className='d-block my-2' type="text" name='id' value={user?._id} disabled />
                <label htmlFor="mNo">Membership No.</label>
                <input className='d-block my-2' type="text" name='mNo' value={user?.mNo} disabled />
                <label htmlFor="aspectRatio">Aspect Ratio:</label>
                <input className='d-block my-2' type="text" name='aspectRatio' value={user?.aspectRatio} disabled />
                <label htmlFor="name">Name:</label>
                <input className='d-block my-2' type="text" name='name' value={user?.name} disabled />
                <label htmlFor="father">Father:</label>
                <input className='d-block my-2' type="text" name='father' value={user?.father} />
                <label htmlFor="address">Address:</label>
                <input className='d-block my-2' type="text" name='address' value={user?.address} />
                <label htmlFor="photo">Image url:</label>
                <input className='d-block my-2' type="text" name='photo' value={user?.photo} disabled />
                <label htmlFor="email">Email:</label>
                <input className='d-block my-2' type="text" name='email' value={user?.email} />
                <label htmlFor="mobile">Mobile:</label>
                <input className='d-block my-2' type="text" name='mobile' value={user?.mobile} />
                <label htmlFor="totalDeposit">Total Deposit:</label>
                <input className='d-block my-2' type="text" name='totalDeposit' value={user?.totalDeposit} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UpdateProfile;