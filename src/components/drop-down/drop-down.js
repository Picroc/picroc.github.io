import './drop-down.scss';

window.dropDownClickHandler = id => {
    const el = $(id)
    el.hasClass('opened') ? el.removeClass('opened') : el.addClass('opened')
}

const mapValueToIndex = value => {
    switch(value) {
        case 0:
            return 2;
        case 1:
            return 0;
        case 2:
        case 3:
        case 4:
            return 1;
        default:
            if (value > 20) {
                if (value > 99) {
                    return mapValueToIndex(value % 100);
                }
                return mapValueToIndex(value % 10);
            }
            return 2;
    }
}

const variations = {
    sleep: ['спальня', 'спальни', 'спален'],
    bed: ['кровать','кровати','кроватей'],
    bath: ['ванная комната','ванных комнаты','ванных комнат']
};
  

const elems = [
    {
        text: 'спальни',
        value: 2,
        variations: variations.sleep
    },
    {
        text: 'кровати',
        value: 2, 
        variations: variations.bed
    },
    {
        text: 'ванные комнаты',
        value: 0, 
        variations: variations.bath
    }
];

window.getDropDownText = (id, custom) => {
    const actual = custom || elems;

    let result = actual.map(elem => {
        if (elem.value === 0) return null;
        return `${elem.value} ${elem.variations[mapValueToIndex(elem.value)]}`
    })
    .filter(elem => elem !== null);

    result = result.join(', ');

    $(`#${id}`).text(result);
}

window.dropClickHandler = (id, type) => {
    const value = parseInt($(`#${id} .incrementer__value h3`)[0].innerText);
    if(value === 0 && type === '-') return;

    const [inputId, _, order] = id.split('_');
    const values = $(`#${inputId} .drop-down-list__element .incrementer__value h3`).map((key, val) => {return parseInt(val.innerText);});

    let data = [...elems];
    data = data.map((elem, idx) => {
        return {
            ...elem,
            value: values[idx]
        }
    });

    if (type === '+') {
        const newValue = value + 1;
        data[parseInt(order)].value = newValue;
        $(`#${id} .incrementer__value h3`).text(newValue);

        if ($(`#${id} .incrementer__button`).first().hasClass('incrementer__button_disabled') && newValue > 0) {
            $(`#${id} .incrementer__button`).first().removeClass('incrementer__button_disabled');
        }
    } else {
        const newValue = value - 1 || 0;
        data[parseInt(order)].value = newValue;
        $(`#${id} .incrementer__value h3`).text(newValue);

        if (!$(`#${id} .incrementer__button`).first().hasClass('incrementer__button_disabled') && newValue === 0) {
            $(`#${id} .incrementer__button`).first().addClass('incrementer__button_disabled');
        }
    }

    getDropDownText(inputId, data);
}