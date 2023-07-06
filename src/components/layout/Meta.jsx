import { Helmet } from 'react-helmet'

const APP_NAME = 'Magna - Food Service'

const Meta = () => (
  <Helmet>
    <title>Magna - Food Service</title>
    <meta name="description" content="Magna - Food Service" />

    <meta name="application-name" content={APP_NAME} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#FFFFFF" />

    <link
      rel="shortcut icon"
      href="https://magnafoodservice.co.uk/wp-content/uploads/2020/06/magna-logo-white.jpg"
    />
    <link rel="manifest" href="/manifest.json" />
  </Helmet>
)

export default Meta
