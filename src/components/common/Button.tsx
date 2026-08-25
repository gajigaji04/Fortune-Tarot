import type { ButtonHTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";
import styles from "./Button.module.css";

interface VariantProps {
  variant?: "outline" | "primary";
  block?: boolean;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps;

function classNames(variant: VariantProps["variant"], block: boolean | undefined, extra?: string) {
  return [styles.button, variant === "primary" ? styles.primary : "", block ? styles.block : "", extra]
    .filter(Boolean)
    .join(" ");
}

export function Button({ variant = "outline", block, className, ...rest }: ButtonProps) {
  return <button className={classNames(variant, block, className)} {...rest} />;
}

type ButtonLinkProps = LinkProps & VariantProps;

export function ButtonLink({ variant = "outline", block, className, ...rest }: ButtonLinkProps) {
  return <Link className={classNames(variant, block, className)} {...rest} />;
}
