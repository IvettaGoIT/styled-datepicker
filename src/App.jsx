import { Route, Routes } from "react-router-dom";
import StyledDatepicker from "./components/StyledDatepicker/StyledDatepicker";
import { AppWrapper } from "./App.styled";
import "./App.css";


function App() {

  return (
    <AppWrapper>
      <StyledDatepicker />
    </AppWrapper>
  );
}
export default App;
