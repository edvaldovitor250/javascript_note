import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props => (
       
        localStorage.getItem('user')
        ? <Component {...props} />
        : <redirect to={{ pathname: '/login'}} />

    )} Route/>
)

export default PrivateRoute;