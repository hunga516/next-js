import images from "../../assets/images";
import AdminSidebarLeft from "../components/AdminSidebarLeft";
import AdminHeader from '../components/AdminHeader';


function AdminLayout({ children }) {
    return (
        <div className="min-h-screen">
            <AdminHeader />
            <div className="layout-wrapper wrapper grid grid-cols-7 md:grid-cols-8">
                {/* Content Wrapper */}
                <div className="col-span-1 md:col-span-1 mt-[61px]">
                    <AdminSidebarLeft />
                </div>
                <div className="col-span-6 md:col-span-7 overflow-auto mx-0 md:mx-8">
                    <div className="mt-[80px]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
