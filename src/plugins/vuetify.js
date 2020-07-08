import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
      customProperties: true,
    },
		themes: {
			light: {
				primary: colors.indigo.base,
				secondary: '#b0bec5',
				accent: '#8c9eff',
				error: '#b71c1c',
			},
		},
	},
});
