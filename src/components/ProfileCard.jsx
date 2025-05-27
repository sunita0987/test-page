import React from 'react';
import ProfileImage from '../assets/images/sunita.jpg'

const Profile = ({ name, bio, contact }) => {
    const handleClick = () => {
        alert(`Contacting ${name} at ${contact}`);
    };

    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-5 mx-auto mt-20">
            <div className="text-center">
                <img
                    className="w-full rounded-2xl mx-auto mb-4"
                    src={ProfileImage}
                    alt={name}
                />
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 font-normal text-base mt-2">{bio}</p>
                <p className="text-blue-600 text-base font-normal mt-2">{contact}</p>
                <button
                    onClick={handleClick}
                    className="mt-4 bg-blue-500 text-base font-normal text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600" >
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Profile;