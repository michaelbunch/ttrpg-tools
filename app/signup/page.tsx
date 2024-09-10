"use server"

import SignUpCard from "@/components/signup"

export default async function SignUp() {
  return (
    <div className="mx-auto w-1/3">
      <SignUpCard />
    </div>
  )
}