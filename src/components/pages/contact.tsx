

import Container from "../layouts/Container"
import { Breadcrumb } from "../organisms/Breadcrumb"
import { ContactSection } from "../organisms/ContactSection"
import Header from "../organisms/Header"


export const ContactPage = () => {
  return (
    <section className="bg-gradient min-h-screen flex flex-col">
      <Header className="relative z-10" />

      <main>
        <Container>
          <div className="py-12">
            <Breadcrumb
              title={<>CONTACTO</>}
              path="INICIO / CONTACTO"
              description="Estamos listos para escuchar tus ideas y necesidades. En Meta Mining Media te ofrecemos un canal directo para consultas, cotizaciones y colaboraciones. Conversemos y demos forma a tu próximo proyecto."
            />
          </div>
        </Container>

        <Container>
          <div className="pb-24">
            <div className="flex flex-col items-center justify-center gap-16 px-0 md:px-4 lg:px-8">
              <ContactSection />
            </div>
          </div>
        </Container>
      </main>


    </section>
  )
}
