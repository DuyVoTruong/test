import { useEffect } from "react";
import { Form } from "react-bootstrap";
import {testFunction} from "../api/test-modul"
import {getTinhThanhPho} from "../api/test-modul"
const AppTest =()=>{

    useEffect(()=>{
        getTinhThanhPho();
    },[])

    return(
        <>
        {
            testFunction()
        }
        <Form.Group className="mb-3" controlId="formDiaChi">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Select className="mb-3" id="city" aria-label="Chọn tỉnh thành">
                <option>Chọn tỉnh thành</option>
            </Form.Select>
            
            <Form.Select className="mb-3" id="district" aria-label="Chọn quận huyện">
                <option>Chọn quận huyện</option>
            </Form.Select>
                    
            <Form.Select className="mb-3" id="ward" aria-label="Chọn phường xã">
                <option>Chọn phường xã</option>
            </Form.Select>

            <Form.Control type="text" placeholder="Nhập số nhà" />
        </Form.Group>
        </>
    )
}

export default AppTest;