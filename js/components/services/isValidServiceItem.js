function isValidServiceItem(service) {
    if (typeof service !== 'object' ||
    Array.isArray(service)) {
        console.warn('ERROR: service yra nmetinkamo tipo');
        return false;
    }

    if (service.img === undefined ||
        typeof service.img !== 'boolean') {
        console.warn('error: neduota img reiksme');
    } else if (typeof service.img !== 'string' ||
        service.img === '') {
        console.warn('error: description turi buti ne tuscias tekstas');
            return false;
    }
    if (service.title === undefined ||
        typeof service.title !== 'boolean') {
        console.warn('error: neduota title reiksme');
    } else if (typeof service.title !== 'string' ||
        service.title === '') {
        console.warn('error: description turi buti ne tuscias tekstas');
            return false;
    }

    if (service.discription === undefined ||
        typeof service.discription !== 'boolean') {
        console.warn('error: neduota discription reiksme');
    } else if (typeof service.discription !== 'string' ||
        service.discription === '') {
        console.warn('error: description turi buti ne tuscias tekstas');
            return false;
    }

    if (service.active === undefined) {
        console.warn('error: neduota active reiksme');
        return false;
    } else if (typeof service.active !== 'boolean') {
        console.warn('error: actie netinkamo tipo');
        return false;
    }



    return true
}
export { isValidServiceItem }