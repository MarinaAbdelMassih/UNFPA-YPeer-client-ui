export interface faqsContent {
  faqsList?: faqsListItem[];
  links: links[];
}

export interface faqsListItem {
  question: string;
  answer: string;
}

export interface links {
  title: string;
  link: string;
}

export class FaqsModel implements faqsContent {
  faqsList?: faqsListItem[];
  links: links[];


  constructor(faqsData: any) {
    this.faqsList = FaqsModel.setFaqsList(faqsData.faqItemCollection.items);
    this.links = FaqsModel.setFaqsLink(faqsData.faqItemLinkCollection.items);
  }

  private static setFaqsList(faqsLists: any[]): faqsListItem[] {
    return faqsLists.map((faqsList) => {
      return {
        question: faqsList.question,
        answer: faqsList.answer,
      };
    });
  }

  private static setFaqsLink(link: any[]): links[] {
    return link.map((url) => {
      return {
        title: url.title,
        link: url.link,
      };
    });
  }
}
