import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

export const ProjectEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.updatedProject.title);
    const [editLanguages, setEditLanguages] = useState(props.updatedProject.languages);
    const [editDescription, setEditDescription] = useState(props.updatedProject.description);
    const [editLink, setEditLink] = useState(props.updatedProject.link);

    const projectUpdate = () => {
        fetch(`http://localhost:3001/project/update/${props.updatedProject.id}`, {
            method: 'PUT',
            body: JSON.stringify({ title: editTitle, languages: editLanguages, description: editDescription, link: editLink }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {
            props.getProjects();
            props.updateOff();
        })
    }

    return (
        <div>
            <Modal isOpen={true}>
                <ModalHeader>edit project</ModalHeader>
                <ModalBody>
                    <Form onSubmit={projectUpdate}>
                        <FormGroup>
                            <Label htmlFor="title">Edit title:</Label>
                            <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="languages">Edit languages:</Label>
                            <Input name="languages" value={editLanguages} onChange={(e) => setEditLanguages(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="description">Edit description:</Label>
                            <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="link">Edit link:</Label>
                            <Input name="link" value={editLink} onChange={(e) => setEditLink(e.target.value)} />
                        </FormGroup>
                       
                        <Button type="submit">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
