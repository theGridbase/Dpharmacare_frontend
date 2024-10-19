'use client'
import { useSession } from "next-auth/react"
import VendorWrapper from "@/components/pageWrappers/VendorWrapper"
import { redirect } from "next/navigation"

export default function Vendors() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/auth')
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <VendorWrapper />
                </div>
            </div>
        </div>
    )
}