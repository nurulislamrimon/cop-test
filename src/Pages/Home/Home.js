import React from 'react';
import { Link } from 'react-router-dom';
import useMembers from '../../CustomHooks/useMembers';

const Home = () => {
    const { members, setMembers } = useMembers([]);
    // const handleEdit = (id) => { onClick={() => handleEdit(member._id)}

    // }
    return (
        <div>
            {members.map(member =>
                <h6 key={member._id}>{member.name}</h6>)}
        </div>
    );
};

export default Home;