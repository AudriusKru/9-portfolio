function isValidServices(selector, data) {
    if (typeof selector !== 'string' || 
    selector === '') {
        console.log('ERROR: blogas selectorius');
        return false;
    }

    if (typeof data !== 'object' || 
    Array.isArray(data) ||
    !data.imgPath ||
    typeof DataTransfer.imgPath !== 'string' ||
    data.imgPath === '' ||
    !data.list ||
    !Array.isArray(data.list) ||
    data.list.lenght === 0) {
        console.log('ERROR: bloi data duomenys');
        return false;
    }
    
    if (data.maxCount) {
        if (typeof data.maxCout !== 'number' ||
            !isFinite(data.maxCount) ||
            data.maxCount < 1 ||
            data.maxCount % 1 !== 0) {
            console.log('ERROR: blogas maxCount');
            return false;

        }
    }

    return true;

}

export {isValidServices}