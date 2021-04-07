function services(selector, data) {
    // input    validation
    console.log(data);

    // logic
    const DOM = document.querySelector(selector);

    const servicesArray = data.list;

    let HTML = '';

    for (let i = 0; i < servicesArray.length; i++) {
        const service = servicesArray[i];
        



        HTML += `<div class="col-12 col-md-6 col-lg-4 service-item">
                <img src="./img/services/mitech-box-image-style-01-image-01-100x108.png" alt="">
                <h4>it design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit accusamus voluptas.</p>
                <a href="#" class="fa fa-long-arrow-right"></a>
                </div>`;
    }

    

    // post logic validation

    // result return
    DOM.innerHTML = HTML;


}
export { services }