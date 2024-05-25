import { KDSBar } from "@/components/kdsbar"; 
import { DotBackground } from "@/components/dotbg";

export default function Home() {
  return (
    <div className="relative">
      <DotBackground />
      <div className="relative z-10">
        <KDSBar />
      </div>
    </div>
  );
}