import {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap';


export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const APIURL = 'https://tristanoshier-server.herokuapp.com';

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/admin/login`, {
            method: 'POST',
            body: JSON.stringify({username: username, password: password}),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }


    return(
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange= {(e) => setUsername(e.target.value)}name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange= {(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    )
}