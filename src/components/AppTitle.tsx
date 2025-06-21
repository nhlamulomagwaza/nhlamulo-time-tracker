import '../styles/index.scss';

import AppLogo from '../assets/clock.png';


const AppTitle = () => {
  return (
    <div className="app-title">
          <img src={AppLogo} alt="" className="app-logo" />
        <h1>Time Tracker</h1>

    </div>
  )
}

export default AppTitle