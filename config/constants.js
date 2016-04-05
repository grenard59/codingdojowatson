'use strict';

module.exports = {
    NATURAL_LANGAGE_CLASSIFIER: {
        CREDENTIALS: {
            url: 'https://gateway.watsonplatform.net/natural-language-classifier/api',
            username: "",
            password: '',
            version: 'v1'
        },
        CLASSIFIER_ID: ''
    },
    ALCHEMY: {
        NAME: "AlchemyAPI-wm",
        LABEL: "user-provided",
        CREDENTIALS: {
            url: "https://access.alchemyapi.com",
            dashboard_url: "https://www.alchemyapi.com/api",
            apikey: "eaafbb3e4d0d466d8d488e566b8238872d6f5779"
        }
    }
};
