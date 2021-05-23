import { Route, Switch } from 'react-router-dom'
import { lazy } from 'react'
const Main = lazy(() => import('../pages/Main'))
const Encryption = lazy(() => import('../pages/Encryption'))
const Decryption = lazy(() => import('../pages/Decryption'))

const Routes = () => {
    return (
        <Switch>
            <Route path='/encryption'>
                <Encryption />
            </Route>
            <Route path='/decryption'>
                <Decryption />
            </Route>
            <Route path='/' exact>
                <Main />
            </Route>
        </Switch>
    );
}

export default Routes