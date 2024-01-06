import { BrowserRouter, Route, Routes } from "react-router-dom";
import Directory from "./pages/Home";
import Profile from "./pages/Profile/index";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/userDetails/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
