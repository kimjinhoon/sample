export function initClassInter():void {}

console.log("--class1--");
class Rectangle {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    getArea() {
        return this.x * this.y;
    }
}
let rectangle = new Rectangle(1, 5);
console.log(rectangle.getArea());

console.log("--class2-");
abstract class Bird {
    abstract birdName: string;
    abstract habitat: string;
    abstract flySound(sound: string) : void;
    fly(): void {
        this.flySound("파닥파닥");
    }
    getHabitat(): void {
        console.log(`<${this.birdName}>의 서식지는 <${this.habitat}> 입니다.`);
    }
}
class WildGoose extends Bird {
    constructor(public birdName: string, public habitat: string) {
        super();
    }

    flySound(sound: string): void {
        console.log(`<${this.birdName}>가 <${sound}> 날아갑니다.`);
    }
}
let wildGoose = new WildGoose("기러기", "순천만 갈대밭");
wildGoose.fly();
wildGoose.getHabitat();

console.log("--interface1-");
let person2: { name: string, city: string }[];
type objLiteralType = { name: string, city: string };
let person3: objLiteralType[];
person3 = [{city: "", name: ""}]

console.log("--type aliasing-");
let emotion: { readonly name: string } = { name: 'sad' };
function aliasing(pEmotion: { name: string }) {
    pEmotion.name = 'happy';
}
console.log(emotion.name);
//emotion.name = 'happy';
aliasing(emotion);
console.log(emotion.name);
//emotion.name = 'happy';
