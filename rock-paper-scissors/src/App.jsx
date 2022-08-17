import {Routes, Route, Link} from "react-router-dom";
import RockPaperScissors from './RockPaperScissors'
import Lotto from './Lotto';

const App = () => {
return(
<div>
<nav>
  <ul>
    <li>
    <Link to="/rockpaperscissors">가위바위보</Link>
    </li>
    <li>
    <Link to="/lotto">로또추첨기</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route path="/rockpaperscissors" element={<RockPaperScissors />} /> 
  <Route path="/lotto" element={<Lotto />} />
</Routes>
</div>
)
}

export default App;