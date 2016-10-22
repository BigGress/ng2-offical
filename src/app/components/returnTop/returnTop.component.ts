import {
    Component
} from "@angular/core";

import {
    Observable
} from "rxjs/observable"
import "rxjs/add/observable/interval";

@Component({
    selector: "return-top-btn",
    styles: [require("./returnTop.component.scss")],
    template: require("./returnTop.component.html")
})
export class returnTopComponent{
    show: boolean = false;

    scroll(event: MessageEvent){
        if (window.scrollY > (window.screen.availHeight / 2)){
            this.show = true;
        } else {
            this.show = false;
        }
    }

    toTop(){
        if(this.show){
            const scrollY = window.scrollY;
            const int = setInterval(() => {

                if (window.scrollY !== 0) {
                    window.scrollTo(0,window.scrollY - window.scrollY / 20);
                } else {
                    clearInterval(int)
                }
            },10)

            // Observable.create(() => {
            // })


        }
    }
}
