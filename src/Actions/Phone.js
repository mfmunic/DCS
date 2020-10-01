/**
 * Reformats phone string to standard format
 * @param {String} phoneStr 
 * @returns {[String, String|undefined]}
 */
export const reformat = (phoneStr) => {
    let phoneNo;
    let phone = phoneStr.split('x')[0];
    let ext = phoneStr.split('x')[1];

    var cleaned = ('' + phone).replace(/\D/g, '');

    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        var intlCode = match[1] ? '+1 ' : '';
        phoneNo = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return [phoneNo, ext];
};