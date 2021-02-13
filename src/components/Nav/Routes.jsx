import { Route, Switch } from 'react-router-dom';
import { PostIndex } from '../Posts/PostIndex';

export const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/'><PostIndex logout={props.logout} token={props.token} /></Route>
            </Switch>
            
        </div>
    )
}
