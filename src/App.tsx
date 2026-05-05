import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { DiagnosisPage } from "@/pages/DiagnosisPage";
import { HomePage } from "@/pages/HomePage";
import { ResultPage } from "@/pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
