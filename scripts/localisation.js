const defaultLocale = 'en';

let currentLocale = defaultLocale;
if (localStorage.getItem('locale'))
    currentLocale = localStorage.getItem('locale');

let localisations = {};

setLocale(currentLocale);

async function initialiseDefaultLocale() {
    if (!localisations[defaultLocale])
        localisations[defaultLocale] = await fetchLocalisation(defaultLocale);
}

async function setLocale(locale) {
    currentLocale = locale;

    if (!localisations[locale])
        localisations[locale] = await fetchLocalisation(locale);

    localStorage.setItem('locale', locale);

    return document
        .querySelectorAll('[data-localisation-key]')
        .forEach((element) => {
            localise(element);
        });
}

async function fetchLocalisation(locale) {
    const response = await fetch(`/lang/${locale}.json`);

    return await response.json();
}

function localise(element) {
    const key = element.getAttribute('data-localisation-key');

    let localisation = getLocalisation(key) || '';

    const variables = JSON.parse(element.getAttribute('data-localisation-var'));

    if (variables) {
        if (
            key == 'stats-shots' &&
            ['russian', 'polish'].includes(currentLocale)
        )
            return (element.innerText = shotsDeclension(variables));

        for (const variable in variables) {
            localisation = localisation.replaceAll(
                `{{${variable}}}`,
                variables[variable]
            );
        }
    }

    return (element.innerText = localisation);
}

function getLocalisation(key) {
    let locale = currentLocale;

    if (!localisations[currentLocale][key]) locale = defaultLocale;

    return localisations[locale][key];
}

function shotsDeclension(count) {
    count = count.shots;
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) {
        let shotsTranslated = getLocalisation('stats-1shot') || '';
        return `${count} ${shotsTranslated}`;
    } else if (
        [2, 3, 4].includes(lastDigit) &&
        ![12, 13, 14].includes(lastTwoDigits)
    ) {
        let shotsTranslated = getLocalisation('stats-few-shots') || '';
        return `${count} ${shotsTranslated}`;
    } else {
        let shotsTranslated = getLocalisation('stats-many-shots') || '';
        return `${count} ${shotsTranslated}`;
    }
}
