import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Subscribe from "@/components/shared/subscribe";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    
    return (
        <div className="font-nunito">
            <Header />
            {children}
            <Subscribe />
            <Footer />
        </div>
    );
}