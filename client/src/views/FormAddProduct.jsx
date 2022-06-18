import { CForm, CFormInput, CFormSelect, CButton } from "@coreui/react";
import Sidebar from "../components/Sidebar";

export default function FormAddProduct() {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100%" }}>
            <Sidebar />
            <CForm className="flex flex-col justify-center items-center w-[84%] px-96">
                <p className="text-2xl">Add Page</p>
                <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Code"
                    placeholder="Code"
                />
                <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Name"
                    placeholder="Name"
                />
                <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Description"
                    placeholder="Description"
                />
                <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    label="Price"
                    placeholder="10000"
                />
                <CFormSelect label="UOM">
                    <option  disabled>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">
                        Three
                    </option>
                </CFormSelect>
                <CButton color="info" className="mt-2">
                    Submit
                </CButton>
            </CForm>
        </div>
    );
}
