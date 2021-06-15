import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

interface IHyperLink {
  className?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  title: string;
}

const Hyperlink = ({ className, href, onClick, title }: IHyperLink) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={cn("hyperlink", className)} onClick={onClick}>
      {title}
    </a>
  </NextLink>
);

Hyperlink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export { Hyperlink };
