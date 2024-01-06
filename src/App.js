import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/index";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userDetails/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
