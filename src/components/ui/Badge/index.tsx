interface BadgeProps {
    children: React.ReactNode;
    variant?: "liquidGlass" | "primary" | "secondary";
}

export default function Badge({ children, variant = "liquidGlass" }: BadgeProps) {
    const variantStyles = {
        liquidGlass: "bg-[#FFFFFF1F] text-gray-edoc-500 border border-[#FFFFFF59] backdrop-blur-xl shadow-[inset_0_1px_0_#FFFFFF73]",
        primary: "bg-gray-edoc-500 text-neutral-edoc-500",
        secondary: "bg-white-500 text-gray-edoc-500"
    } as const;

    return (
        <span className={`${variantStyles[variant]} px-3 py-1 rounded-xl text-sm font-medium inline-block transition-all duration-300`}>
            {children}
        </span>
    );
}
