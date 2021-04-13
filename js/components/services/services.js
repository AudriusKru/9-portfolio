import { isValidServices } from './isValidServices.js';
import { isValidServiceItem } from "./isValidServiceItem.js";



function services(selector, data) {
    // input    validation
    if (!isValidServices(selector, data)) {
        return false
    }
    console.log(data);

    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('pagal pateikta selektoriu nerastas norimas elemtas.');
        return false;
    }

    const { list, imgPath, maxCount} = data;

    let HTML = '';
    let generatedSericesCount = 0;

    for (let i = 0; i < list.length; i++) {
        const service = list[i];
        console.log(service);

        // service item validation if (isValidServiceItem)
        if (isValidServiceItem(service) ||
            !service.active) {
            continue;
        }
        if (generatedSericesCount === maxCount) {
            break;
        }

        generatedSericesCount++
        HTML += `<div class="service-item">
                    <img src="${imgPath + service.img}" alt="">
                    <h4>${services.title}</h4>
                    <p>${services.desription}</p>
                    <a href="${service.link}" class="fa fa-long-arrow-right"></a>
                </div>`;
    }

    

    // post logic validation

    // result return
    DOM.innerHTML = HTML;


}
export { services }