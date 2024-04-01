import Dashboard from "./components/Dashboard";
import ModalComponent from "./components/Modal/index.jsx";
import { GlobalState } from "./contexts/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { openModal } = GlobalState();
  return (
    <>
      <Dashboard />
      {openModal ? <ModalComponent /> : null}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
