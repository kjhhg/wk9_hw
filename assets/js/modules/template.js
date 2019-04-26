let x = 1;
export const newsTemplate = news =>`
    <div class="item--${x++,x%6+1}">
    <img src="${news.urlToImage}" alt="newsImage">
    </div>
`;