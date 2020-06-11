module.exports = {
    'plugins': [
        'stylelint-order'
    ],
    'rules': {
        'color-named': 'never',
        'color-no-hex': true,
        'order/order': [
            'custom-properties',
            'declarations'
        ],
        'order/properties-alphabetical-order': true
    }
};
