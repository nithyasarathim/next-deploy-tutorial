'use client'

import { useSession, signIn, signOut } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  if(session){
    return(
      <div className="w-full h-screen flex">
        <div className="m-auto">
            <p className="mt-10">You are logged in with the email : {session.user.email}</p>
            <button onClick={()=>{signOut()}}>Sign Out</button>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full h-screen flex">
        <div className="m-auto">
          <p>
            You're not logged In
          </p>
          <button onClick={()=>{signIn()}}>Sign In</button>
        </div>
      </div>
  )
}

export default page