'use client'
import { useSession } from "next-auth/react"
import InventoryWrapper from "@/components/pageWrappers/InventoryWrapper"
import { redirect } from "next/navigation"

export default function Inventory() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/auth')
        }
    })


    return <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <InventoryWrapper />
            </div>
        </div>
    </div>
}