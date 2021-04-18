import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ProjectCreate } from './ProjectCreate';
import { ProjectTable } from './ProjectTable';
import { ProjectEdit } from './ProjectEdit';

export const ProjectIndex = (props) => {
    const [projects, setProjects] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updatedProject, setUpdatedProject] = useState({});
    const APIURL = 'https://tristanoshier-server.herokuapp.com';


    useEffect(() => {
        getProjects();
    }, [])

    const getProjects = () => {
        fetch(`${APIURL}/site/projects`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((projects) => {
                setProjects(projects);
            })
    }

    const editProject = (project) => {
        setUpdatedProject(project);
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
                    <ProjectCreate getProjects={getProjects} token={props.token} />
                </Col>
                <Col md="9">
                    <ProjectTable projects={projects} editProject={editProject} updateOn={updateOn} getProjects={getProjects}
                        token={props.token} />
                </Col>
                {updateActive ? <ProjectEdit updatedProject={updatedProject} updateOff={updateOff} token={props.token} getProjects={getProjects} /> : <></>}
            </Row>
        </Container>
    )
}
