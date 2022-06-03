import React, { useEffect, useState } from 'react';

const useMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return { members, setMembers }
};

export default useMembers;