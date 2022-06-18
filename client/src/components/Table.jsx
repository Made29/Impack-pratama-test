import {
    CTable,
    CTableHead,
    CTableBody,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter
} from "@coreui/react";
import { useState } from "react";

export default function Table() {
    const [modal, setModal] = useState(false);

    return (
        <CTable style={{ background: "#FAFAFA", width: "84%" }}>
            <CTableHead>
                <CTableRow className="h-10">
                    <CTableHeaderCell scope="col">No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Code</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                    <CTableHeaderCell scope="col">UOM</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                    <CTableDataCell className="space-x-1">
                        <CButton color="success">Edit</CButton>
                        <CButton color="danger" onClick={() => setModal(true)}>Delete</CButton>
                        <CModal visible={modal} onClose={() => setModal(false)}>
                            <CModalHeader>
                                <CModalTitle>Delete Product</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                Are you sure want to delete this procuct?
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setModal(false)}>Close</CButton>
                                <CButton color="primary">Delete</CButton>
                            </CModalFooter>
                        </CModal>
                    </CTableDataCell>
                </CTableRow>
            </CTableBody>
        </CTable>
    );
}
