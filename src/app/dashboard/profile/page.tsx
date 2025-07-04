import React from 'react'
import DashboardLayout from '@/components/layout/DashboardLayout'

function Page() {
  return (
    <DashboardLayout breadcrumbTitle='Profile'>
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Profile Dashboard</h1>
            <p className="text-gray-600">Manage your profile and settings.</p>
        </div>
        {/* Add your profile management components here */}
    </DashboardLayout>
  )
}

export default Page