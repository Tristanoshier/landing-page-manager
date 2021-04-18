import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const ProjectCreate = (props) => {

    const [title, setTitle] = useState('');
    const [languages, setLanguages] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const APIURL = 'https://tristanoshier-server.herokuapp.com';
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && languages && description && link) {
            fetch(`${APIURL}/project/create`, {
                method: 'POST',
                body: JSON.stringify({ title: title, languages: languages, description: description, link: link }),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then((res) => res.json())
                .then(() => {
                    setTitle('');
                    setLanguages('');
                    setDescription('');
                    setLink('');
                    props.getProjects();
                })
        } else {
            alert('please fill out all fields')
        }

    }

    return (
        <div>
            <h3>Add Project</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title: </Label>
                    <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="languages">Languages: </Label>
                    <Input name="languages" value={languages} onChange={(e) => setLanguages(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Description: </Label>
                    <Input name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="link">Link: </Label>
                    <Input name="link" value={link} onChange={(e) => setLink(e.target.value)} />
                </FormGroup>
                <Button type="submit">Click to Add</Button>
            </Form>
        </div>
    )
}
