import { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { PostCreate } from './PostCreate';
import { AdminTable } from './AdminTable';
import { PostEdit } from './PostEdit';


export const AdminIndex = (props) => {
    const [posts, setPosts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updatedPost, setUpdatedPost] = useState({});


    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        fetch("http://localhost:3001/site/", {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((posts) => {
            setPosts(posts);
        })
    }

    const editPost = (post) => {
        setUpdatedPost(post);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }


    return (
        <Container>
            <Button onClick={props.logout}>Logout</Button>
        <Row>
            <Col md="3">
                <PostCreate getPosts={getPosts} token={props.token} />
            </Col>
            <Col md="9">
                <AdminTable posts={posts} editPost={editPost} updateOn={updateOn} getPosts={getPosts}
                token={props.token}/>
            </Col>
            {updateActive ? <PostEdit updatedPost={updatedPost} updateOff={updateOff} token={props.token} getPosts={getPosts}/> : <></>}
        </Row>
    </Container>
    )
}
