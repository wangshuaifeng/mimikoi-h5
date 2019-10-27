import React from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd-mobile';
import enUS from 'antd-mobile/lib/locale-provider/en_US';


import Home from 'pages/home';
import Explain from 'pages/explain';
import Pay from 'pages/pay';
import CreditCardPay from 'pages/creditCardPay';
import Convenience from 'pages/convenience';
import SoftBank from 'pages/softBank';
import PayFinish from 'pages/payFinish';
import ServeRule from 'pages/serveRule';
import Privacy from 'pages/privacy';


import Nomatch from 'pages/nomatch';


const ScrollToTopComp = ({ children, location: { pathname } }) => {
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const ScrollToTop = withRouter(ScrollToTopComp);

function App() {
  return (
    <LocaleProvider locale={enUS}>
      <Router>
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/explain' component={Explain} />
              <Route path='/pay' component={Pay} />
              <Route path='/credit-card-pay' component={CreditCardPay} />
              <Route path='/convenience' component={Convenience} />
              <Route path='/softBank' component={SoftBank} />
              <Route path='/payFinish' component={PayFinish} />
              <Route path='/serveRule' component={ServeRule} />
              <Route path='/privacy' component={Privacy} />
              <Route component={Nomatch} />
            </Switch>
          </ScrollToTop>
      </Router>
    </LocaleProvider>
  );
}

export default App;
