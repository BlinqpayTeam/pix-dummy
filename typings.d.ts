type FooterLinkProps = { subtitle: string, url: string };

type FooterAddressProps = {
   title: string,
   iconPath: string,
   value?: string,
   children?: FooterLinkProps[];
}

type UsefulLinkProps = {
   title: string;
   children?: FooterLinkProps[];
}