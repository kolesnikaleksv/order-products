import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar";

const TestRouterHelper = (component) => {
  return (
    <MemoryRouter>
      <Sidebar/>
      {component}
    </MemoryRouter>
  )
}

export default TestRouterHelper;