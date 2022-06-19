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
import { useNavigate } from "react-router-dom";
import { deleteProduct, fetchAllData } from "../store/actions/actionProduct";
import rupiah from "../helpers/formatRupiah";

export default function Table() {
    const [modal, setModal] = useState(false);
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch]);

    const deleteButton = (id) => {
        dispatch(deleteProduct(id));
    };

    const editButton = (id, code, name, description, price, UOM) => {
        navigate(`/editProduct/${id}`, {
            state: { id: id, code: code, name: name, description: description, price: price, UOM: UOM }
        })
    };

    return (
        <CTable style={{ background: "#FAFAFA" }}>
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
                {products.map &&
                    products.map((el, i) => (
                        <CTableRow>
                            <CTableHeaderCell scope="row">
                                {i + 1}
                            </CTableHeaderCell>
                            <CTableDataCell>{el.code}</CTableDataCell>
                            <CTableDataCell className="w-52">
                                {el.name}
                            </CTableDataCell>
                            <CTableDataCell className="w-[45%]">
                                {el.description}
                            </CTableDataCell>
                            <CTableDataCell>{rupiah(el.price)}</CTableDataCell>
                            <CTableDataCell>{el.UOM}</CTableDataCell>
                            <CTableDataCell className="space-x-1">
                                <CButton
                                    color="success"
                                    onClick={() => {
                                        editButton(
                                            el.id,
                                            el.code,
                                            el.name,
                                            el.description,
                                            el.price,
                                            el.UOM
                                        );
                                    }}
                                >
                                    Edit
                                </CButton>
                                <CButton
                                    color="danger"
                                    onClick={() => setModal(true)}
                                >
                                    Delete
                                </CButton>
                                <CModal
                                    visible={modal}
                                    backdrop={false}
                                    onClose={() => setModal(false)}
                                >
                                    <CModalHeader>
                                        <CModalTitle>
                                            Delete Product
                                        </CModalTitle>
                                    </CModalHeader>
                                    <CModalBody>
                                        Are you sure want to delete the product
                                        from product list?
                                    </CModalBody>
                                    <CModalFooter>
                                        <CButton
                                            color="secondary"
                                            onClick={() => setModal(false)}
                                        >
                                            Close
                                        </CButton>
                                        <CButton
                                            color="primary"
                                            onClick={() => {
                                                deleteButton(el.id)
                                                setModal(false)
                                            }}
                                        >
                                            Delete
                                        </CButton>
                                    </CModalFooter>
                                </CModal>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
            </CTableBody>
        </CTable>
    );
}
