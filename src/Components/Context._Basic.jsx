import {UserContext} from '../UserContext.js'
import Context_Home from '../pages/Context_page'
export default function Context(){
    const user={name:'ali', age:40}
    return(
        <>
        <UserContext.Provider value={user}>
            <Context_Home/>
        </UserContext.Provider>
        </>
    )
}