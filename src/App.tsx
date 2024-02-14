import "./App.css";
import ProductsPage from "./pages/ProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ProductsPage></ProductsPage>
      </div>
    </QueryClientProvider>
  );
}

export default App;
