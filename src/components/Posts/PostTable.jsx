import {Table, Button} from 'reactstrap';

export const PostTable = (props) => {
    const APIURL = 'https://tristanoshier-server.herokuapp.com';

    const deletePost = (post) => {
        fetch(`${APIURL}/post/delete/${post.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            })
        }).then(() => props.getPosts())
    }

    const postMapper = () => {
        return props.posts.map((post, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{post.id}</th>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>{post.topic}</td>
                    <td>
                        <Button color="warning" onClick={()=> {props.editPost(post); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deletePost(post)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
        <h3>All Posts</h3>
        <hr/>
        <Table striped>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Topic</th>
                </tr>
            </thead>
            <tbody>
                {postMapper()}
            </tbody>
        </Table>
        </>
    )
}
