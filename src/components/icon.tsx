import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const iconVariants = cva("", {
    variants: {
        animate: {
            false: "",
            true: "animate-pulse",
        }
    },
    defaultVariants: {
        animate: false,
    },
});

interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof iconVariants> {
    svg: React.FC<React.ComponentProps<"svg">>
}

export default function Icon({ svg: SvgComponent, animate, ...props }: IconProps) {
    return <SvgComponent {...props} />

}