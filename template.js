import flag from 'country-code-emoji'

const template = cf => {
    const emoji = flag(cf.country) || "👋🏻"
  
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Hello!</title>
          <link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
          <style>
            body {
              background: #eee;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              font-family: sans-serif;
            }
            div.container {
              background: #fff;
              border-radius: 1rem;
              padding: 4rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Hello there! You're connecting from ${cf.city} in ${cf.country} ${emoji}</h1>
            <br>
            <p>Cloudflare offers us "<a rel="nofollow noreferrer external" href="https://developers.cloudflare.com/workers/runtime-apis/request#incomingrequestcfproperties" target="_blank" >IncomingRequestCfProperties</a>" which we can use to show edge information, <br>such as from which ASN you are connecting from: <b>${cf.asOrganization}</b> – <i>${cf.asn}</i>.</p>
          </div>
        </body>
      </html>
      `
  }
  
export default template