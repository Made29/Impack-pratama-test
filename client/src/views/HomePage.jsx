import Table from "../components/Table"
import Sidebar from "../components/Sidebar"

export default function HomePage(){
    return (
        <div style={{display: "flex", height: "100vh", width: "100%" }}>
            <Sidebar />
            <Table />
        </div>
    )
}