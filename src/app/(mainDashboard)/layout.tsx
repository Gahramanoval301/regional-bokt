import Footer from "@/components/_common/Footer";
import Header from "@/components/_common/Header";


function WithLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div
        className="container mx-auto max-w-4xl p-4"
      >
        <div>{/* <RenderLeftSideBar /> */}</div>
        <div
          
        >
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WithLayout;
