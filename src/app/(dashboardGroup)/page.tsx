'use client'

import { useSession } from "next-auth/react"
import OverAllInsightsWrapper from "@/components/pageWrappers/OverAllInsightsWrapper"
import RestockNotifications from "@/components/notifications/restockNotifications/RestockNotifications"
import { redirect } from "next/navigation"

export default function Home() {
    const { data: session } = useSession(
        // {
        // required: true,
        // onUnauthenticated() {
        //     redirect('/auth')
        // }
        // }
    )



    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <OverAllInsightsWrapper />
                </div>
                <div className="col-lg-4">
                    <RestockNotifications />
                </div>
            </div>
        </div>
    )
}