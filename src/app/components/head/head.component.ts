import {
   Component,
   ViewChild,
   ElementRef
} from "@angular/core";

import {
    Observable
} from "rxjs/observable";

@Component({
    selector: "main-head",
    // directives: [],
    styles: [require("./head.component.scss")],
    template: require("./head.component.html")
})
export class HeadComponent {
    @ViewChild("head") el: ElementRef;
    num: number = 0;

    scroll(event: MouseEvent){
        let el = this.el.nativeElement;
        const scrollY = window.scrollY;

        if ( scrollY > 50 ) {
            if ( el.className.indexOf("active") < 0 ) {
                el.className += " active";
            }
        } else {
            el.className = el.className.replace("active", "");
        }
        // Observable.create((observer) => {
        //     let el = this.el.nativeElement;
        //     const scrollY = window.scrollY;

        //     observer.next({
        //         el, scrollY
        //     })
        // }).subscribe((data) => {
        //     let el = data.el, scrollY = data.scrollY;
        //     if ( scrollY > 50 ) {
        //         if ( el.className.indexOf("active") < 0 ) {
        //             el.className += " active";
        //         }
        //     } else {
        //         el.className = el.className.replace("active", "");
        //     }
        // })
    }
}
