import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const PostCreate = (props) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && body && topic) {
            fetch("http://localhost:3001/post/create/", {
            method: 'POST',
            body: JSON.stringify({title: title, body: body, topic: topic}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then(() => {
            setTitle('');
            setBody('');
            setTopic('');
            props.getPosts();
        })
        } else {
            alert('please fill out all fields')
        }
        
    }

    return (
        <div>
            <h3>create a post</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title" />
                    <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="body"/>
                    <Input name="body" value={body} onChange={(e) => setBody(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="topic" />
                    <Input type='select' name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} >
                        <option>-select-</option>
                        <option value="programming">Programming</option>
                        <option value="music">Music</option>
                        <option value="movies">Movies</option>
                        <option value="blog">Blog</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Click to Post</Button>
            </Form>
        </div>
    )
}
