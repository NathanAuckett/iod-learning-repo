
import {Clock} from "./clock.js";

class clockExtended extends Clock {
    constructor(template, precision = 1000) {
        super(template)
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

const clock = new clockExtended("h:m:s", 500);
clock.start();