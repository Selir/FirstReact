import { Button, Form } from "react-bootstrap"


export const LoginComponent = ({ onChange,form,getLogin }) => {

    return (
        <>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" name="username"
                     value={form?.username} onChange={(e)=>onChange(e)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"
                     value={form?.password} onChange={(e)=>onChange(e)} />
                </Form.Group>
                <Button variant="primary" onClick={()=>getLogin()} >Submit</Button>   
            </Form>
        </>
    )



}