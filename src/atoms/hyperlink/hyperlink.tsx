import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

interface IHyperLink {
  children?: any;
  className?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  title?: string;
}

const Hyperlink = ({
  children,
  className,
  href,
  onClick,
  title
}: IHyperLink) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={cn("hyperlink", className)} onClick={onClick}>
      {title ? title : children}
    </a>
  </NextLink>
);

Hyperlink.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string
};

export { Hyperlink };
