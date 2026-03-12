import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button className="btn btn-primary btn-sm">Create Report</button>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-base-content/70 font-medium">Total Revenue</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-base-content/50"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-2xl font-bold">$45,231.89</p>
                                <span className="text-xs text-success font-medium">+20.1%</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-base-content/70 font-medium">Subscriptions</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-base-content/50"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-2xl font-bold">+2350</p>
                                <span className="text-xs text-success font-medium">+180.1%</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-base-content/70 font-medium">Sales</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-base-content/50"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
                            </div>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-2xl font-bold">+12,234</p>
                                <span className="text-xs text-success font-medium">+19%</span>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body p-4">
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-base-content/70 font-medium">Active Now</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-base-content/50"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                            <div className="mt-2 flex items-baseline gap-2">
                                <p className="text-2xl font-bold">+573</p>
                                <span className="text-xs text-success font-medium">+201</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart area */}
                    <div className="lg:col-span-2 card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold">Overview</h2>
                            <div className="h-64 w-full flex items-end gap-2 pt-4">
                                {/* Placeholder for a chart */}
                                {[40, 70, 45, 90, 65, 55, 80, 40, 30, 60, 85, 50].map((h, i) => (
                                    <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2 text-xs text-base-content/50">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="card bg-base-100 shadow-sm border border-base-200">
                        <div className="card-body">
                            <h2 className="card-title text-lg font-semibold mb-4">Recent Sales</h2>
                            <p className="text-sm text-base-content/70 mb-4">You made 265 sales this month.</p>

                            <div className="flex flex-col gap-4">
                                {[
                                    { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
                                    { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
                                    { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
                                    { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
                                    { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
                                ].map((sale, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-10 rounded-full bg-base-300 grid place-items-center text-sm font-medium">
                                                {sale.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{sale.name}</p>
                                            <p className="text-xs text-base-content/60 truncate">{sale.email}</p>
                                        </div>
                                        <div className="font-medium text-sm">{sale.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
