'use client'
import { useSession } from "next-auth/react"
import PosWrapper from "@/components/pageWrappers/PosWrapper"
import { redirect } from "next/navigation"



export default function PosPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/auth')
        }
    })

    return (
        <div className="container">
            <div className="row">

                <PosWrapper />

            </div>
        </div>
    )
}