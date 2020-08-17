import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GitHubContext from '../../context/github/githubContext';

const Users = () => {
    
    const gitHubContext = useContext(GitHubContext);
    const {loading, users} = gitHubContext;
    console.log('users in Users.js', users)
    if(loading){
        return <Spinner />
    } else {
        if (!Array.isArray(users)){
            return (
                <div style={userStyle}>
                    <UserItem key={users.id} user={users}/>
                </div>
            )
        } else {
            return (
                <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            )
        }
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users
