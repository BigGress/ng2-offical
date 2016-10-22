import {
  Component
} from "@angular/core";

@Component({
    selector: "index",
    template: require("./index.component.html"),
})
export class indexComponent{
    imgList: Array<{src: string}> = [{
        src: "//img.alicdn.com/tps/TB1rSReNpXXXXX9aFXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp"
    }, {
        src: "//gw.alicdn.com/tps/TB1E4kiNXXXXXcqaXXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp"
    }, {
        src: "//gw.alicdn.com/tps/TB1fkYfNpXXXXaRXpXXXXXXXXXX-1080-415.jpg_760x760q75.jpg_.webp"
    }]
}
