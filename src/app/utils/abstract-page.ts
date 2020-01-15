import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Models } from 'src/app/utils/models';

export abstract class AbstractPage {

    constructor(
        protected alertController: AlertController,
        protected navController: NavController,
        protected router: Router,
    ) { }

    abstract confirmPageNext(): boolean;
    abstract onSectionPrevious(): void;
    abstract onSectionNext(): void;
    abstract pageName(): string;

    changeEnabledState(pageId: string, personId: string) {
        let divId = pageId + ':' + personId;
    
        console.log("Changing enabled state of: " + divId);
    
        const container = document.getElementById(divId);
        let elements = container.getElementsByTagName('ion-item');
    
        for (let i = 0; i < elements.length; i++) {
          elements[i].disabled = !elements[i].disabled;
        }
    }
    
    changeExpandState(pageId: string, personId: string) {
        let divId = pageId + ':' + personId;

        console.log("Changing expand state of: " + divId);

        const divDesplegarItems = document.getElementById(divId);

        if (divDesplegarItems.style.display == 'none') {
            divDesplegarItems.style.display = 'block';
        }
        else {
            divDesplegarItems.style.display = 'none';
        }
    }

    changePage(direction: number) {

        // verify if user can go to next page
        if (direction == 1 && !this.confirmPageNext()) {
            return;
        }

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

    getCurrentPage() {
        const spCurrentPage = document.getElementById('current-page-' + this.pageName());
        let currentPage = Number(spCurrentPage.innerHTML);
        return currentPage;
    }

    getNombreCompleto(id: string): string {
        return Models.nombreCompleto(id);
    }

    getPageCount() {
        const spPageCount = document.getElementById('page-count-' + this.pageName());
        let pageCount = Number(spPageCount.innerHTML);
        return pageCount;
    }

    setActivePage(currentPage: number, pageCount: number) {
        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
            let pageId = 'page-' + pageNumber + '-' + this.pageName();
            const page = document.getElementById(pageId);
    
            if (pageNumber == currentPage) {
                console.log('Activating page: ' + pageId);
                page.style.display = 'block';
            } else {
                console.log('Deactivating page: ' + pageId);
                page.style.display = 'none';
            }
        }
    }

    async showAlert(title: string, content: string) {
        const alert = await this.alertController.create({
            header: title,
            message: content,
            buttons: ["Ok"],
        });

        await alert.present();
    }

    async showInvalidPropertyAlert(personId: string, errorMessage: string) {
        let nombreCompleto: string = this.getNombreCompleto(personId);

        const alert = await this.alertController.create({
            header: `Persona ${personId}`,
            subHeader: nombreCompleto,
            message: errorMessage,
            buttons: ["Ok"],
        });
            
        await alert.present();
    }
}
