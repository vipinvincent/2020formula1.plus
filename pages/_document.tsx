import Document, { Html, Head, Main, NextScript } from 'next/document'
import { name } from '../package.json'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content={name} />

          <meta
            name='description'
            content='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more... '
          />
          <meta name='author' content='Xtrios' />
          <meta
            name='keywords'
            content='f1.plus, f1plus, formula1plus, formula1.plus, f1-plus, formula1-plus, f1, formula1, formula 1, formula-1, f1 insights, f1 news, f1 schedule, f1 standings, f1 drivers, f1 teams, f1 results, formula1 insights, formula1 news, formula1 schedule, formula1 standings, formula1 drivers, formula1 teams, formula1 results '
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/images/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/images/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/images/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/images/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/images/favicon/safari-pinned-tab.svg'
            color='#e10600'
          />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#e10600' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </Head>
        <body id='main'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
