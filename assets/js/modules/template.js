let count = 1
export const newsTemplate = news =>`
    <div class="item--${count++}">
    <img src="${news.urlToImage}" alt="newsImage">
    </div>
`;

