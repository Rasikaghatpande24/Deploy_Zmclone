import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Filter from './Filter';
import Details from './Details';
import Header from './Header';
import AdminPost from './AdminPost';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/filter" component={Filter} />
            <Route path="/details" component={Details} />
            <Route path="/adminrest" component={AdminPost} />     
        </BrowserRouter>
    )
}

export default Router;
