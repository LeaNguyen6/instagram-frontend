import React from 'react'
import ListPosts from './components/ListPosts'
import AddPost from './components/AddPost'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

export default function Home() {
    let { path, url } = useRouteMatch();
    return (
        <Router>
      <div>
        <ul>
          <li>
            <Link to={url}>Home</Link>
          </li>
          <li>
            <Link to={`${url}add`}>Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path={path} component={ListPosts} />
          <Route path={`${path}add`} component={AddPost} />
        </Switch>
      </div>
    </Router>
    )
}
