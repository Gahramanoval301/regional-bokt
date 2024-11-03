import Footer from "@/components/_common/Footer";
import Header from "@/components/_common/Header";

function WithLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default WithLayout;
