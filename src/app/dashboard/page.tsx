import React from 'react';
import {getServerSession} from 'next-auth'
import {redirect} from 'next/navigation'

const Dasboard = async() =>  {
    const session = await getServerSession()
    if(!session) return redirect('/')
    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dasboard;