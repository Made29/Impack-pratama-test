import { CSidebar, CSidebarBrand, CNavItem, CSidebarNav } from "@coreui/react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <CSidebar style={{ background: "#0284C7", width: "16%" }}>
            <CSidebarBrand className="p-8 text-black">
                Impact Pratama TBK
            </CSidebarBrand>
            <CSidebarNav>
                <Link to={"/"}>
                    <CNavItem className="hover:bg-sky-700 p-3 text-black duration-150 cursor-pointer">
                        List Product
                    </CNavItem>
                </Link>
                <Link to={"/addProduct"}>
                    <CNavItem className="hover:bg-sky-700 p-3 text-black duration-150 cursor-pointer">
                        Add Product
                    </CNavItem>
                </Link>
            </CSidebarNav>
        </CSidebar>
    );
}
