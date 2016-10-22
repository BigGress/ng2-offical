import {
    Component,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/operator/map";

@Component({
    selector: "home-entry-link",
    styles: [require("./homeEntry.component.scss")],
    template: require("./homeEntry.component.html")
})
export class homeEntryComponent{
    linksArr: Array<{
        name: string,
        src: string,
        image: any
    }> = [{
        name: "机票",
        src: "",
        image: "//gw.alicdn.com/tps/TB1vSs9KFXXXXcRapXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "酒店",
        src: "",
        image: "//gw.alicdn.com/tps/TB1zPSSKVXXXXbAXVXXXXXXXXXX-450-258.jpg_q75.jpg_.webp"
    },{
        name: "火车票",
        src: "",
        image: "//gw.alicdn.com/tps/TB1sirAKpXXXXc1XFXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "旅游度假",
        src: "",
        image: "//gw.alicdn.com/tps/TB1I21xNpXXXXa9aXXXXXXXXXXX-450-258.jpg_q75.jpg_.webp"
    },{
        name: "领里程",
        src: "",
        image: "//gw.alicdn.com/tps/TB1EAARKFXXXXXEaXXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "汽车票",
        src: "",
        image: "//gw.alicdn.com/tps/TB1rVw9KFXXXXbzXpXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "门票",
        src: "",
        image: "//gw.alicdn.com/tps/TB1dts_KFXXXXXTXpXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "WiFi电话卡",
        src: "",
        image: "//gw.alicdn.com/tps/TB13r.UKFXXXXb7XVXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "周边游",
        src: "",
        image: "//gw.alicdn.com/tps/TB1lFSJKVXXXXXUapXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    },{
        name: "租车接送机",
        src: "",
        image: "//gw.alicdn.com/tps/TB1LBPQKpXXXXaaXXXXXXXXXXXX-300-172.jpg_q75.jpg_.webp"
    }];

    constructor(private sanitizer: DomSanitizer){

        Observable.from(this.linksArr)
                    .map((el) => {
                        // console.log(el)
                        el.image = this.sanitizer.bypassSecurityTrustStyle('url(' + el.image + ')');

                        return el;
                    })
                    .subscribe()
        // this.linksArr.forEach((el, i, arr) => {
        //     arr[i].image = this.sanitizer.bypassSecurityTrustStyle('url(' + el.image + ')');
        // })
    }
}
