import React, { FC, HTMLAttributes, ReactNode, SVGProps } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
}
declare const Button: FC<ButtonProps>;

interface AccordionProps {
    isOpen?: boolean;
    onToggle?: () => void;
    children: ReactNode;
    title: string;
    innerControl?: boolean;
}
declare const Accordion: FC<AccordionProps>;

type IconProps = SVGProps<SVGSVGElement>;
declare const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>>;
declare const QuestionMarkIcon: React.FC<React.SVGProps<SVGSVGElement>>;
declare const UserIcon: React.FC<React.SVGProps<SVGSVGElement>>;

export { Accordion, type AccordionProps, Button, type ButtonProps, CheckIcon, type IconProps, QuestionMarkIcon, UserIcon };
