class Snow {
    constructor(width, height, x,y, delX, delY){
        this.width = width;
        this.height = height;
        this.y = y;
        this.x = x;
        this.delX = delX;
        this.delY = delY;
        this.snow = document.createElement('div');
    }
    
    create() {
        this.snow.style.position = "absolute";
        this.snow.style.top = `${this.y}px`;
        this.snow.style.left = `${this.x}px`;
        this.snow.style.width = `${this.width}px`;
        this.snow.style.height = `${this.height}px`;
        this.snow.style.zIndex = `${9999}`;
        this.snow.style.borderRadius = `${this.width}px`
        this.snow.style.filter = `blur(${this.r(5,2)}px)`;
    
        this.snow.style.backgroundColor = "#ffffff";
        
        document.body.appendChild(this.snow);
    }

    move(frame){
        
        let animation = setInterval(()=>{
            this.snow.style.top = `${this.y + this.delY}px`
            this.snow.style.left = `${this.x + this.delX}px`
            this.y += this.delY;
            this.x += this.delX;
            if(this.x > window.innerWidth - this.width || this.x < 0 - this.width) {
                clearInterval(animation)
                this.snow.remove();
            };
            if(this.y < -30 || this.y > window.innerHeight) {
                clearInterval(animation);
                this.snow.remove();
            }
        }, frame)
    }

    r(max, min = 0){
        return Math.floor(Math.random() * (max - min) + min)
    }
}

function r(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function rMinus(){
    return r(9) > 6 ? 1 : -1;
}

setInterval(()=>{
    let snow = new Snow(14,14,r(window.innerWidth),-20, rMinus() * r(5,3), r(5));
    snow.create();
    snow.move(15);
}, 60);
