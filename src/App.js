import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Switch
} from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import About from "./components/About";
import Register from "./components/Register";
import Home from "./components/Home";
import Shop from "./components/Shop";
var login_true = false;


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home></Home>} />
				<Route path="/shop" element={<Shop></Shop>} />
				<Route path="/about" element={<About></About>} />
				<Route path="/login" element={<Login></Login>} />
				<Route path="/register" element={<Register></Register>} />
				<Route path="/logout" element={<Logout></Logout>} />
			</Routes>
		</Router>
	);
}

export default App;
