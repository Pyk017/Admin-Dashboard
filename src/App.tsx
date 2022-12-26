import { ColorModeContext, useMode, themeContextType } from "./theme";
import { CssBaseline, ThemeProvider, Theme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Invoices from "./pages/Invoices";
import Contacts from "./pages/Contacts";
import Bar from "./pages/Bar";
import Form from "./pages/Form";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import FAQ from "./pages/FAQ";
import Geography from "./pages/Geography";
import Calendar from "./pages/Calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/geography" element={<Geography />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
