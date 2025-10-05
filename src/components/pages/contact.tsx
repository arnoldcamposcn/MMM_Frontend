
import { useTranslation } from 'react-i18next';
import Container from "../layouts/Container"
import { Breadcrumb } from "../organisms/Breadcrumb"
import { ContactSection } from "../organisms/ContactSection"
import Header from "../organisms/Header"


export const ContactPage = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient min-h-screen flex flex-col">
      <Header />

      <main>
        <Container>
        <div className=" pt-24 md:pt-24 pb-8 md:pb-12">
        <Breadcrumb
              title={<>{t("contact.title")}</>}
              path={t("contact.breadcrumb")}
              // description={t("contact.description")}
            />
          </div>
        </Container>

        <Container>
          <div className="pb-0 md:pb-4 lg:pb-24">
            <div className="flex flex-col items-center justify-center gap-16 px-0 md:px-4 lg:px-8">
              <ContactSection />
            </div>
          </div>
        </Container>
      </main>


    </section>
  )
}
