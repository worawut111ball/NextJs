import { NavLinks } from "../ui/nav-links";

export default function DashboardLayout({children,}:{children: React.ReactNode;})
 {
    return (
        <section>
            <NavLinks />
         <div>Next JS</div>
            {children}
        </section>
       
    );
}