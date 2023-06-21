import React from 'react';

const Navigation =({onRouteChange, isSignedIn})=> {
    if(isSignedIn) {
        return (
            <nav onClick={() => onRouteChange('signin')} style={{display:"flex", justifyContent:"flex-end", height: '50px'}}>
                <p className='f3 link dim black underline mt3 pa3 pt0 pointer'>Sign Out</p>
            </nav>
        );
    }
    else{
        return (
            <div>
                <nav onClick={() => onRouteChange('signin')} style={{display:"flex", justifyContent:"flex-end", height: '50px'}}>
                    <p className='f3 link dim black underline mt3 pa3 pt0 pointer'>Sign In</p>
                </nav>
                <nav onClick={() => onRouteChange('register')} style={{display:"flex", justifyContent:"flex-end", height: '50px'}}>
                    <p className='f3 link dim black underline mt3 pa3 pt0 pointer'>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;