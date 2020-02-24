//credits to https://github.com/lndgalante/codewars-katas

function domain_from_url_short_working(url) {
    return url.replace(/.+\/\/|www.|\..+/g, '')
}


/*
function domain_from_url_long_working(url) {
  return url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split('.')[0]
}


function domain_from_url_long_notworking(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {

            result = match[1]
        }
    }
    return result.split('.')[0];
}

*/

