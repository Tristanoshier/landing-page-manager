import { useState } from 'react';
import {
    Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody
}
    from 'reactstrap';

export const PostEdit = (props) => {
    const [editTitle, setEditTitle] = useState(props.updatedPost.title);
    const [editBody, setEditBody] = useState(props.updatedPost.body);
    const [editTopic, setEditTopic] = useState(props.updatedPost.topic);

    const postUpdate = () => {
        fetch(`http://localhost:3001/post/update/${props.updatedPost.id}`, {
            method: 'PUT',
            body: JSON.stringify({ title: editTitle, body: editBody, topic: editTopic }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => {
            props.getPosts();
            props.updateOff();
        })
    }

    return (
        <div>
            <Modal isOpen={true}>
                <ModalHeader>edit post</ModalHeader>
                <ModalBody>
                    <Form onSubmit={postUpdate}>
                        <FormGroup>
                            <Label htmlFor="title">Edit title:</Label>
                            <Input name="title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="body">Edit body:</Label>
                            <Input name="body" value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="topic">Edit Topic:</Label>
                            <Input type="select" name="topic" value={editTopic} onChange={(e) => setEditTopic(e.target.value)}>
                                <option>-select-</option>
                                <option value="programming">Programming</option>
                                <option value="music">Music</option>
                                <option value="movies">Movies</option>
                                <option value="blog">Blog</option>
                            </Input>
                        </FormGroup>
                        <Button type="submit">Update</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
