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

type QwidBlogType = {
   title: string;
   author: string;
   image: string;
   readTime: string;
   summary: string;
   status: string;
   tags: string[],
   createdAt: string;
   updatedAt: string;
   version: number,
   id: string;
}