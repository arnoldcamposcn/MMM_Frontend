// layouts/MainLayout.tsx
import React from "react";
import Footer from "../organisms/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>

      <Footer
        onNewsletterSubscribe={() => {}}
        companyName="Meta Mining"
        description="Conectamos al sector minero con contenidos creativos, aliados estratégicos y producciones de alto impacto."
      />
    </div>
  );
};

export default MainLayout;
