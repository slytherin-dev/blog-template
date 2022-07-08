import { Container } from '@/components/Container';
import { Footer, Header } from '@/features/navigation';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen vstack gap-10 bg-global">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
