import svgPaths from "../imports/svg-nl68v6vd2a";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export function Logo({ size = "medium" }: LogoProps) {
  const dimensions = {
    small: { icon: 40, width: "auto" },
    medium: { icon: 48, width: "auto" },
    large: { icon: 60, width: "auto" }
  };

  const textSizes = {
    small: { main: "text-[20px]", sub: "text-[10.2px]", spacing: "tracking-[1.32px]" },
    medium: { main: "text-[24px]", sub: "text-[12.75px]", spacing: "tracking-[1.65px]" },
    large: { main: "text-[30px]", sub: "text-[15.3px]", spacing: "tracking-[2.04px]" }
  };

  const dims = dimensions[size];
  const textSize = textSizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Icon */}
      <div className="relative shrink-0" style={{ width: dims.icon, height: dims.icon }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <g>
            <path d={svgPaths.p1a286880} fill="url(#paint0_linear_logo)" />
            <path d={svgPaths.p10b28a00} fill="white" />
            <path d={svgPaths.p2adc2980} fill="white" />
            <path d={svgPaths.p12e2ea00} fill="#2C2F33" />
            <path d={svgPaths.p2605e400} fill="#2C2F33" />
            <path d={svgPaths.p2f8f6c00} fill="white" />
            <path d={svgPaths.p2200c080} fill="white" />
            <path d={svgPaths.p3f676400} stroke="white" strokeLinecap="round" strokeWidth="3.2" />
            <path d={svgPaths.p3d5ff900} fill="#ED4245" opacity="0.3" />
            <path d={svgPaths.pd780} fill="#ED4245" opacity="0.3" />
            <path d={svgPaths.p66efe80} fill="url(#paint1_linear_logo)" opacity="0.9" />
            <path d="M8 28H72" opacity="0.6" stroke="#00D9FF" strokeDasharray="3.2 3.2" strokeWidth="1.2" />
            <path d="M8 20H72" opacity="0.4" stroke="#00D9FF" strokeWidth="0.8" />
            <path d="M9.6 22.4V9.6H22.4" opacity="0.8" stroke="#00D9FF" strokeLinecap="round" strokeWidth="2.4" />
            <path d="M70.4 22.4V9.6H57.6" opacity="0.8" stroke="#00D9FF" strokeLinecap="round" strokeWidth="2.4" />
            <path d="M9.6 57.6V70.4H22.4" opacity="0.8" stroke="#00D9FF" strokeLinecap="round" strokeWidth="2.4" />
            <path d="M70.4 57.6V70.4H57.6" opacity="0.8" stroke="#00D9FF" strokeLinecap="round" strokeWidth="2.4" />
            <path d={svgPaths.p7a85400} fill="#00D9FF" opacity="0.724853" />
            <path d={svgPaths.p32c5a100} fill="#00D9FF" opacity="0.995147" />
            <path d={svgPaths.p3553c800} fill="#00D9FF" opacity="0.715147" />
            <path d={svgPaths.pc79b00} fill="#00D9FF" opacity="0.435147" />
            <path d={svgPaths.p36297070} fill="#00D9FF" opacity="0.444853" />
            <path d={svgPaths.p31317a00} fill="#57F287" />
            <path d={svgPaths.p31317a00} fill="white" opacity="0.2" />
            <path d="M56 16L58.4 18.4L64 12.8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="12" x2="6355.36" y1="8" y2="5558.44">
              <stop stopColor="#5865F2" />
              <stop offset="1" stopColor="#7289DA" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_logo" x1="8" x2="6408" y1="24" y2="24">
              <stop stopColor="#00D9FF" stopOpacity="0" />
              <stop offset="0.5" stopColor="#00D9FF" />
              <stop offset="1" stopColor="#00D9FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-0.5">
        <span className={`font-bold leading-tight text-[#5865f2] ${textSize.main} tracking-tight`}>
          SkinCheck
        </span>
        <span className={`font-semibold leading-tight text-[#00d9ff] ${textSize.sub} ${textSize.spacing}`}>
          AI
        </span>
      </div>
    </div>
  );
}
