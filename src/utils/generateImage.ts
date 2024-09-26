import { CarType } from "../types"
import { colors } from "./constans";

const generateImage = (car: CarType, angle?: string): string => {

    const url = new URL("https://cdn.imagin.studio/getimage/");

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", car.make);
    url.searchParams.append("modelFamily", car.model);
    url.searchParams.append("zoomType", "fullscreen")
    //acı paramı gelirse
    if (angle) {
        url.searchParams.append("angle", angle)
    }
    //dizini uzunluğu kadar rastgele bir parametre belirle
    const i = Math.round(Math.random() * colors.length)
    //diziden rastgele alınan sayıyı param olarak ekle
    url.searchParams.append("paintId", colors[i])


    //url nin son halini return ediyoruz
    return url.href;
};
export default generateImage;