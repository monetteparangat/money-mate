import { IonApp } from "@ionic/react";
import MainLayout from "./pages/Main.tsx/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <IonApp>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </IonApp>
  );
}

export default App;
