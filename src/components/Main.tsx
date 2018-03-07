import * as React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { Hello } from './Hello';
import { Instances } from './Instances';
import { Raids } from './Raids';

export const Main = () =>
  <Router>
    <div>
      <Hello title="Hello Schier!" />

      <ul>
        <li><Link to="/instances">Instances</Link></li>
        <li><Link to="/raids">Raids</Link></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Instances}/>
        <Route path="/raids" component={Raids}/>
      </div>
    </div>

  </Router>
