const YEAR = new Date().getFullYear()

const theme = {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Kenrick Halff.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'nl', text: 'Nederlands' }
  ]
}

export default theme