import dayjs from 'dayjs';
require('../../node_modules/dayjs/locale/fr');

export default {
    methods: {
        formatDate(dateString) {
            const date = dayjs(dateString);
                // Then specify how you want your dates to be formatted
            return date.locale('fr').format(' D MMMM YYYY à hh:m:s');
        }
    }
}