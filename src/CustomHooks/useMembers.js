import React, { useEffect, useState } from 'react';

const useMembers = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://cop-test.herokuapp.com/members')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])
    return { members, setMembers }
};

export default useMembers;