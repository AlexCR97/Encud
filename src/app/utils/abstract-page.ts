export abstract class AbstractPage {

    abstract onSectionPrevious(): void;
    abstract onSectionNext(): void;
    abstract pageName(): string;

    changePage(direction: number) {
        console.log('changePage() from AbstractPage');

        const spCurrentPage = document.getElementById('current-page-' + this.pageName());
        const spPageCount = document.getElementById('page-count-' + this.pageName());
        
        let currentPage = Number(spCurrentPage.innerHTML);
        let pageCount = Number(spPageCount.innerHTML);
        
        currentPage += direction;
    
        // go to previous section
        if (currentPage <= 0) {
            this.onSectionPrevious();
            return;
        }
    
        // go to next section
        if (currentPage > pageCount) {
            this.onSectionNext();
            return;
        }
    
        // go to next page
        this.setActivePage(currentPage, pageCount);
    
        // update page counter
        spCurrentPage.innerHTML = currentPage.toString();
    }

    setActivePage(currentPage: number, pageCount: number) {
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
            let pageId = 'page-' + pageNumber + '-' + this.pageName();
            const page = document.getElementById(pageId);
    
            if (pageNumber == currentPage) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        }
    }
}
