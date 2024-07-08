import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import configData from '../config.json'

export const TestAuth = () => {
    const {isLoading, error, isAuthenticated, user, getAccessTokenSilently, loginWithRedirect, logout} = useAuth0();

    const [publicString, setPublicString] = useState('')
    const [privateString, setPrivateString] = useState('')
    const [accessToken, setAccessToken] = useState(null)
   
    async function fetchPublicData(){
        let url = 'http://localhost:8080/admin/public'

        const res = await fetch(url, {
            method: "GET", 
            headers: new Headers({
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            })
        }).then((res) => {
            if(res.status === 400){
                console.log(res)
                // setPublicString(res.json())
            }
            // setPublicString(res)
        }).catch((e) => console.log(e))
    }

    function fetchPrivateData(){
        let url = 'http://localhost:8080/admin/private'

        fetch(url, {
            method: "GET", 
            headers: new Headers({
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            })
        }).then((res) => {
            if(res.status === 200){
                console.log(res)
            //    setPrivateString(res.json()) 
            }
            
        }).catch((e) => console.log(e))
    }

    useEffect(() => {
        setAccessToken("")
        const getAccessToken = async () => {
            try{
                const accessToken = await getAccessTokenSilently({
                    audience: configData.audience, 
                    scope: configData.scope
                });
                setAccessToken(accessToken)
            }catch(e){
                console.log(e)
            }
        }
        getAccessToken()
    }, [getAccessTokenSilently])

   
    
    // if(error){
    //     return <div>Oops... {error.message}</div>
    // } else if(isLoading){
    //     return <div>Loading...</div>
    // } else if(!isAuthenticated){
    //     // return loginWithRedirect();
    //     return <button onClick={() => loginWithRedirect()}>Login</button>
    // } else  if(isAuthenticated){
    //     return (<div>
    //         {/* private: {privateString} */}
    //         {privateString !== "" ? (<div>{privateString}</div>) : ""}
    //         <button onClick={() => fetchPrivateData()}>Show string</button>
    //         <button onClick={() => logout({returnTo: 'http://localhost:3000'})}>Logout</button>
    //         </div>)

    // } else {
        return <div>Hi</div>
    // }
    
}

