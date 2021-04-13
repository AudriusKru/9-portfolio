class Header {
    constructor(selector) {
this.selector = selector;
this.data = data;
this.init();
    }

    init (){// validuoti selector
        if (!this.isValidSelector()) {
            return false;
        } // validuoti data
        if (!this.isValidData()) {
            return false;
        }// susirasti DOM vieta kur generuosime header (pagal selector)
        const DOM = document.querySelector(this.selector);
        if (!DOM) {
            console.error("nepayko");
            return false;
        }
        this.DOM =DOM;
        
        this.DOM.classList.add('header');
        // sukurti top--text
        // sukurti logo
        // sukurti nav
        // sukurti
        // sukurti
        // sukurti
    }

    isValidSelector() {
        return true;
    }
    isValidData(){
        return true;
    }
}
export { Header }