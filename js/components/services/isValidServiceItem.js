function isValidServiceItem(service) {
    if (typeof service !== 'object' ||
    Array.isArray(service)) {
        console.log('ERROR: service yra nmetinkamo tipo');
        return false;
    }

    if (!service.img || 
        !service.title ||
        !service.discription ||
        !service.link ||
        !service.active) {
            console.log('error: truksta butinos informacijos');
        return false;
    }

    if (service.active === undefined ||
        typeof service.active !== 'boolean') {
        console.log('error: actie neegzistuoja');
    }



    return true
}
export { isValidServiceItem }