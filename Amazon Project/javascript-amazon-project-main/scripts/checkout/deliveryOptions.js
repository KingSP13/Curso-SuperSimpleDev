import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

const today = dayjs();

export function calculateDeliveryDate(deliveryOption) {
    const deliveryDate = today.add(
    deliveryOption.deliveryDays,
    'days'
    );
    const dateString = deliveryDate.format(
    'dddd, MMMM D'
    );
}