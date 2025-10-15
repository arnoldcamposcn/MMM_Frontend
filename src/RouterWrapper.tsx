// import  App  from "./App"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import { LoadingWrapper } from "./components/layouts/LoadingWrapper"
import { LoadingProvider } from "./contexts/LoadingContext"
import { HomePage } from "./components/pages/home"
import { PortfolioPage } from "./components/pages/portfolio"
import { AboutPage } from "./components/pages/about"
import { ContactPage } from "./components/pages/contact"
import { ServicesPage } from "./components/pages/services"
import { InformationServicePage } from "./components/pages/informationService"

const AppNavigator = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <LoadingWrapper>
          <MainLayout>
            <Routes>
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<AboutPage />} />
                <Route path="/contacto" element={<ContactPage />} />
                <Route path="/portafolio" element={<PortfolioPage />} />
                <Route path="/servicios" element={<ServicesPage />} />
                {/* <Route path="/servicio" element={<InformationServicePage />} /> */}
                {/* <Route path="/servicios/:slug" element={<InformationServicePage />} /> */}
                <Route path="/servicios/:slug" element={<InformationServicePage/>} />

            </Routes>
          </MainLayout>
        </LoadingWrapper>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default AppNavigator;