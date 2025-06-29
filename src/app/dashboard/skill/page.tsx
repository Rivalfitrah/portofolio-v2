import DashboardLayout from '@/components/layout/DashboardLayout'
import React from 'react'

function Page() {
  return (
    <DashboardLayout breadcrumbTitle='Skill'>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Skill Dashboard</h1>
            <p className="text-gray-600">Manage your skills and expertise.</p>
        </div>
        {/* Add your skill management components here */}


    </DashboardLayout>
  )
}

export default Page