import RoutesComponent from "./RoutesComponent.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <main>
        <QueryClientProvider client={queryClient}>
            <RoutesComponent />
        </QueryClientProvider>
    </main>
  )
}

export default App
