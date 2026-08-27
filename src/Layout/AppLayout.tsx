import { Outlet } from 'react-router'
import { Nav } from '../Components/Nav'
import { Footer } from '../Components/Footer'

function AppLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
