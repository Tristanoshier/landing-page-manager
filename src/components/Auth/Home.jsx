import { Routes } from "../Nav/Routes";
import { SiteNav } from "../Nav/SiteNav";

export const Home = (props) => {
    return (
        <div>
            <SiteNav logout={props.logout} token={props.token} />
            <Routes logout={props.logout} token={props.token} />
        </div>
    )
}
