import { useRouter } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth'
import { auth } from '../lib/firebase'
import { signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Gamepad } from 'lucide-react'
import { useLocation } from '@tanstack/react-router'

export function DashboardWrapper({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth()
    const router = useRouter()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (!loading && !user) {
            router.navigate({ to: '/login' })
        }
    }, [user, loading, router])

    const handleLogout = async () => {
        await signOut(auth)
        router.navigate({ to: '/login' })
    }

    const handleDashboard = async () => {
        router.navigate({ to: '/dashboard' })
    }

    const handleGame = async () => {
        router.navigate({ to: '/game' })
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-base-100">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        )
    }

    if (!user) {
        return null
    }

    return (
        <div className={`drawer ${isDesktopSidebarOpen ? 'lg:drawer-open' : ''} bg-base-200 min-h-[90vh]`}>
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" checked={isSidebarOpen} onChange={(e) => setIsSidebarOpen(e.target.checked)} />

            {/* Main Content Area */}
            <div className="drawer-content flex flex-col min-h-screen">
                {/* Top Navbar */}
                <div className="navbar bg-base-100 shadow-sm border-b border-base-200 sticky top-0 z-30">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <button onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)} className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </div>

                    <div className="flex-1 px-2 mx-2 font-bold text-xl hidden lg:block">Overview</div>
                    <div className="flex-1 px-2 mx-2 font-bold text-xl lg:hidden">Sabacc</div>

                    <div className="flex-none gap-2">

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-300">
                                <div className="w-9 rounded-full">
                                    <img alt="User avatar" src={user.photoURL || "https://api.dicebear.com/7.x/identicon/svg?seed=" + user.email} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
                                <li className="menu-title px-4 py-2 text-xs opacity-70">
                                    {user.displayName || user.email}
                                </li>
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <div className="divider my-0"></div>
                                <li><button onClick={handleLogout} className="text-error">Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Render the matched child route component */}
                {children}
            </div>

            {/* Sidebar Drawer */}
            <div className="drawer-side z-40">
                <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-64 min-h-full bg-base-100 text-base-content border-r border-base-200 flex flex-col pt-4">

                    <div className="flex items-center gap-2 px-2 mb-6 text-xl font-bold">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" /></svg>
                        </div>
                        <span>Sabacc.inc</span>
                    </div>

                    <ul className="flex-1 flex flex-col gap-1">
                        <li className="menu-title text-xs font-semibold px-2 pb-2">Overview</li>
                        <li className={location.pathname === '/dashboard' ? 'active bg-base-200' : ''}><button onClick={handleDashboard}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>Dashboard</button></li>
                        <li className={location.pathname === '/game' ? 'active bg-base-200' : ''}><button onClick={handleGame}><Gamepad className="w-4" /> Game</button></li>

                        <li className="menu-title mt-4 text-xs font-semibold px-2 pb-2">Settings</li>
                        <li><a><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>General Settings</a></li>
                        <li><a><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>Security</a></li>
                    </ul>

                    <div className="mt-auto px-2 pt-4 border-t border-base-200">
                        <button onClick={handleLogout} className="btn btn-ghost w-full justify-start text-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
