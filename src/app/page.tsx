import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";

export default function Home() {
  return (
    <PortfolioShell>
      <PortfolioPage />
    </PortfolioShell>
  );
}
