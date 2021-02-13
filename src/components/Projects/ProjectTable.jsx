import { Table, Button } from 'reactstrap';

export const ProjectTable = (props) => {

    const deleteProject = (project) => {
        fetch(`http://localhost:3001/project/delete/${project.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(() => props.getProjects())
    }

    const projectMapper = () => {
        return props.projects.map((project, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{project.id}</th>
                    <td>{project.title}</td>
                    <td>{project.body}</td>
                    <td>{project.topic}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editProject(project); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteProject(project) }}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <>
            <h3>All Projects</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Languages</th>
                        <th>Description</th>
                        <th>link</th>
                    </tr>
                </thead>
                <tbody>
                    {projectMapper()}
                </tbody>
            </Table>
        </>
    )
}
