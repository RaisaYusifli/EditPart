import React from "react";
import "./App.css";
import EditPage from "./pages/EditPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <EditPage />
      </ChakraProvider>
    </div>
  );
}

export default App;
