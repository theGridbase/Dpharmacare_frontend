'use client'

import { useSession } from 'next-auth/react'
import InsightsWrapper from "@/components/pageWrappers/InsightsWrapper"
import { redirect } from 'next/navigation'

export default function Insights() {
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
                    <InsightsWrapper />
                </div>
            </div>
        </div>
    )
}