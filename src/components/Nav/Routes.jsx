import { Route, Switch } from 'react-router-dom';
import { PostIndex } from '../Posts/PostIndex';
import { ProjectIndex } from '../Projects/ProjectIndex';

export const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/'><PostIndex logout={props.logout} token={props.token} /></Route>
                <Route exact path="/projects"><ProjectIndex logout={props.logout} token={props.token}/></Route>
            </Switch>
            
        </div>
    )
}
