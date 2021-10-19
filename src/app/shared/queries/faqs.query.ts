export const faqsQuery = `{
 faqs(id: "6dBCLGUItrf4rEnHhnkREr"){
    faqItemCollection {
      items {
      question
      answer
       }
     }
     faqItemLinkCollection {
      items {
        title
        link
      }
    }
   }
 }`;
