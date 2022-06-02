import React, { useEffect, useState } from 'react';

const useFindUser = (id) => {
    const [user, setUser] = useState();
    useEffect(() => {
        fetch(`https://cop-test.herokuapp.com/user/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return { user, setUser }
};

export default useFindUser;