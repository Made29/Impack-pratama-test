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
    CModalFooter,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../store/actions/actionProduct";
import  rupiah  from "../helpers/formatRupiah"

export default function Table() {
    const [modal, setModal] = useState(false);
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);

    return (
        <CTable style={{ background: "#FAFAFA"}}>
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
                {products.map((el, i) => (
                    <CTableRow>
                        <CTableHeaderCell scope="row">{ i + 1 }</CTableHeaderCell>
                        <CTableDataCell>{ el.code }</CTableDataCell>
                        <CTableDataCell className="w-52">{ el.name }</CTableDataCell>
                        <CTableDataCell className="w-[45%]">{ el.description }</CTableDataCell>
                        <CTableDataCell>{ rupiah(el.price) }</CTableDataCell>
                        <CTableDataCell>{ el.UOM }</CTableDataCell>
                        <CTableDataCell className="space-x-1">
                            <CButton color="success">Edit</CButton>
                            <CButton
                                color="danger"
                                onClick={() => setModal(true)}
                            >
                                Delete
                            </CButton>
                            <CModal
                                visible={modal}
                                onClose={() => setModal(false)}
                            >
                                <CModalHeader>
                                    <CModalTitle>Delete Product</CModalTitle>
                                </CModalHeader>
                                <CModalBody>
                                    Are you sure want to delete this procuct?
                                </CModalBody>
                                <CModalFooter>
                                    <CButton
                                        color="secondary"
                                        onClick={() => setModal(false)}
                                    >
                                        Close
                                    </CButton>
                                    <CButton color="primary">Delete</CButton>
                                </CModalFooter>
                            </CModal>
                        </CTableDataCell>
                    </CTableRow>
                ))}
            </CTableBody>
        </CTable>
    );
}
