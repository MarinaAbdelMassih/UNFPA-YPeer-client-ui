export const faqsQuery = `{
 faqs(id: "6dBCLGUItrf4rEnHhnkREr"){
 result
    faqItemCollection {
      items {
      questionEn
      questionAr
      answerEn
      answerAr
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
