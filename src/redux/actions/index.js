export const blogPageIncrement = () => {
    return {type: 'BLOG_PAGE_INCREMENT'}
}

export const blogPageDecrement = () => {
    return {type: 'BLOG_PAGE_DECREMENT'}
}

export const worksPageIncrement = () => {
    return {type: 'WORKS_PAGE_INCREMENT'}
}

export const worksPageDecrement = () => {
    return {type: 'WORKS_PAGE_DECREMENT'}
}

export const setWorks = (works) =>{
  return {
    type: 'SET_WORKS',
    works: works
  }
}

export const setCompleteWorks = (completeWorks) =>{
  return {
    type: 'SET_COMPLETE_WORKS',
    completeWorks: completeWorks
  }
}
