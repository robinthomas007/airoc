import FloatingWhatsAppButton from '@/app/components/layout/FloatingWhatsAppButton';
import SiteFooter from '@/app/components/layout/SiteFooter';
import SiteHeader from '@/app/components/layout/SiteHeader';

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
