export const CourseCatalogQuery = `{
  courseCatalog(id: "3JK5lgH4mndTZDBngafIgl"){
    title
    illustrativeDataCollection {
      titleEn
      titleAr
      dateEn
      dateAr
      descriptionEn
      descriptionAr
      image {
        url
      }
    }
    instructorsListCollection {
      items {
        id
        nameEn
        nameAr
        titleEn
        titleAr
        descriptionEn
        descriptionAr
        image {
          url
        }
      }
    }
    advancedCoursesListCollection {
      items {
        id
        nameAr
        nameEn
        descriptionEn
        descriptionAr
        image {
          url
        }
      }
    }
  }
}`;
