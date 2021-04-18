import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PostCreate } from './PostCreate';
import { PostTable } from './PostTable';
import { PostEdit } from './PostEdit';


export const PostIndex = (props) => {
    const [posts, setPosts] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updatedPost, setUpdatedPost] = useState({});
    const APIURL = 'https://tristanoshier-server.herokuapp.com';

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        fetch(`${APIURL}/site/`, {
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
        <Row>
            <Col md="3">
                <PostCreate getPosts={getPosts} token={props.token} />
            </Col>
            <Col md="9">
                <PostTable posts={posts} editPost={editPost} updateOn={updateOn} getPosts={getPosts}
                token={props.token}/>
            </Col>
            {updateActive ? <PostEdit updatedPost={updatedPost} updateOff={updateOff} token={props.token} getPosts={getPosts}/> : <></>}
        </Row>
    </Container>
    )
}
