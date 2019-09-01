import React from 'react'
import Helmet from 'react-helmet'

type HeaderProps = {
    title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) =>
    <Helmet>
        <meta charSet="utf-8"/>
        <title>{title}</title>
    </Helmet>
