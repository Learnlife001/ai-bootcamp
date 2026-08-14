import { ImageResponse } from "next/og";

export const alt = "Chigozie G. Okuma â€” AI Builder, Full Stack Developer and Automation Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "radial-gradient(circle at 76% 20%, #6732a8 0%, #141a2d 28%, #07090d 66%)", color: "#f8f7f2", fontFamily: "Arial, sans-serif", padding: "70px 76px" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: -2 }}>CGO<span style={{ color: "#65d7f0" }}>.</span></div>
          <div style={{ display: "flex", border: "1px solid rgba(255,255,255,.25)", borderRadius: 999, padding: "13px 24px", fontSize: 18, letterSpacing: 2 }}>CJ.GREGLABS.NL</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#9eabc0", fontSize: 20, fontWeight: 700, letterSpacing: 4, marginBottom: 22 }}>AI BUILDER Â· FULL STACK DEVELOPER Â· AUTOMATION SPECIALIST</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 900, lineHeight: 0.88, letterSpacing: -7 }}>
            <span>CHIGOZIE G.</span><span>OKUMA</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#b9c3d4", fontSize: 22 }}>
          <span>AI Â· ENGINEERING Â· AUTOMATION Â· CYBERSECURITY</span>
          <span style={{ color: "#65d7f0" }}>BUILDING IDEAS INTO PRODUCTS</span>
        </div>
      </div>
    </div>,
    size,
  );
}
