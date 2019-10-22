import './range-slider.scss';

window.updateSliderValue = (id, lb) => {
    const element = $(`#${id} .range-slider__label span`)[0];
    const value = $(`#${id} .range-slider input`)[0].value;

    $(element).text(value.replace(';', `${lb} - `) + lb);
}