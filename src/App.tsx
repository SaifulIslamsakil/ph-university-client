import Mainlayout from "./components/layout/Mainlayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

const App = () => {
  return (
    <div style={{ maxWidth: 1280, width: "full", margin: "auto" }}>
      <ProtectedRoute>
        <Mainlayout />
      </ProtectedRoute>
    </div>
  );
};

export default App;