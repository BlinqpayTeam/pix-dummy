const footerAddresses: FooterAddressProps[] = [
   {
      title: 'Nigeria',
      iconPath: '/images/footer/nigeria.svg',
      value: '1A Remi Olowude Street, 2nd Roundabout, Lekki-Epe Lekki Expressway, Lagos'
   },
   {
      title: 'United States',
      iconPath: '/images/footer/united-states.svg',
      value: '3739 Balboa Street, Unit #5070 San Francisco, California'
   },
   {
      title: 'United Kingdom',
      iconPath: '/images/footer/united-kingdom.svg',
      value: '30 Churchill Pl, London E14 5EU, UK'
   },
   {
      title: 'Canada',
      iconPath: '/images/footer/canada.svg',
      value: '7111 Syntex Drive, 3rd Floor, Mississauga, Ontario L5N 8C3'
   },
   {
      title: 'Social Media',
      iconPath: '',
      children: [
         { subtitle: 'Facebook', url: 'https://www.facebook.com/Blinqpay-112739471078828/?_rdc=2&_rdr' },
         { subtitle: 'Instagram', url: 'https://www.instagram.com/blinqpayapp/' },
         { subtitle: 'Twitter', url: 'https://twitter.com/Blinqpayapp?t=3Q2cTVlGvVA-xFVx_5FS9Q&s=08' },
         { subtitle: 'Linkedin', url: 'https://www.linkedin.com/m/company/blinqpay-company/' },
      ],
   },
]

const footerUsefulLinks: UsefulLinkProps[] = [
   {
      title: 'Company',
      children: [
         { subtitle: 'About us', url: '#aboutUs' },
         // { subtitle: 'The Team', url: '#' },
         // { subtitle: 'Careers', url: '#' },
      ]
   },
   {
      title: 'Products',
      children: [
         { subtitle: 'Blinqcheckout', url: 'https://merchant.blinqpay.io', target: '_blank' },
         { subtitle: 'Blinqchat', url: '#' },
         { subtitle: 'Qwid', url: 'https://qwid.io', target: '_blank' },
         { subtitle: 'ZAP', url: '#' },
      ]
   },
   {
      title: 'Developers',
      children: [
         // { subtitle: 'Guides', url: 'https://docs.blinqpay.io/reference/introduction-1', target: '_blank' },
         // { subtitle: 'Changelog', url: '#' },
         { subtitle: 'API Docs', url: 'https://docs.blinqpay.io/reference/introduction-1', target: '_blank' },
      ]
   },
   {
      title: 'Support',
      children: [
         { subtitle: 'Contact us', url: '#' },
         { subtitle: 'FAQs', url: '#' },
         { subtitle: 'Blog', url: 'https://qwid.io/blog', target: '_blank' },
      ]
   },
]

export {
   footerAddresses,
   footerUsefulLinks
}